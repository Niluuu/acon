import axios from "axios";

export function quantity(valu, product) {
  return (dispatch) => {
    dispatch(quantityBegin());
    return axios
      .patch(`https://dev.mod.uz/mdapi/v1/carts/${product}/quantity/${valu}`, {
        headers: {
          "cart-uid": "1",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(quantitySuccess(json));
        return json;
      })
      .catch((error) => dispatch(quantityFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const ADD_CART_BEGIN = "ADD_CART_BEGIN";
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const ADD_CART_FAILURE = "ADD_CART_FAILURE";

export const quantityBegin = () => ({
  type: ADD_CART_BEGIN,
});

export const quantitySuccess = (products) => ({
  type: ADD_CART_SUCCESS,
  payload: { products },
});

export const quantityFailure = (error) => ({
  type: ADD_CART_FAILURE,
  payload: { error },
});
