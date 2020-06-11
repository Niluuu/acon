import axios from "axios";
export function fetchGetCart() {
  return (dispatch) => {
    dispatch(fetchGetCartBegin());
    return fetch("https://dev.mod.uz/mdapi/v1/carts", {
      headers: {
        "cart-uid": "1",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchGetCartSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchGetCartFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_GET_CART_BEGIN = "FETCH_GET_CART_BEGIN";
export const FETCH_GET_CART_SUCCESS = "FETCH_GET_CART_SUCCESS";
export const FETCH_GET_CART_FAILURE = "FETCH_GET_CART_FAILURE";

export const fetchGetCartBegin = () => ({
  type: FETCH_GET_CART_BEGIN,
});

export const fetchGetCartSuccess = (products) => ({
  type: FETCH_GET_CART_SUCCESS,
  payload: { products },
});

export const fetchGetCartFailure = (error) => ({
  type: FETCH_GET_CART_FAILURE,
  payload: { error },
});
