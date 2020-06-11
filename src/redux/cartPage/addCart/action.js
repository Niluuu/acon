import axios from "axios";

export function addCart(productID) {
  const params = {
    product: productID,
    quantity: 1,
  };

  return (dispatch) => {
    dispatch(addCartBegin());
    return axios
      .post("https://dev.mod.uz/mdapi/v1/carts ", params, {
        headers: {
          "cart-uid": "1",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addCartSuccess(json));
        return json;
      })
      .catch((error) => dispatch(addCartFailure(error)));
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

export const addCartBegin = () => ({
  type: ADD_CART_BEGIN,
});

export const addCartSuccess = (products) => ({
  type: ADD_CART_SUCCESS,
  payload: { products },
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  payload: { error },
});
