export function fetchRemoveCart(id) {
  return (dispatch) => {
    dispatch(fetchRemoveCartBegin());
    return fetch(`https://dev.mod.uz/mdapi/v1/carts/${id}/remove`, {
      method: "DELETE",
      headers: {
        "cart-uid": window.localStorage.getItem("uid"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchRemoveCartSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchRemoveCartFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_REMOVE_CART_BEGIN = "FETCH_REMOVE_CART_BEGIN";
export const FETCH_REMOVE_CART_SUCCESS = "FETCH_REMOVE_CART_SUCCESS";
export const FETCH_REMOVE_CART_FAILURE = "FETCH_REMOVE_CART_FAILURE";

export const fetchRemoveCartBegin = () => ({
  type: FETCH_REMOVE_CART_BEGIN,
});

export const fetchRemoveCartSuccess = (products) => ({
  type: FETCH_REMOVE_CART_SUCCESS,
  payload: { products },
});

export const fetchRemoveCartFailure = (error) => ({
  type: FETCH_REMOVE_CART_FAILURE,
  payload: { error },
});
