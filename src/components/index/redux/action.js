import axios from "axios";

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    axios
      .get("https://mod.uz/mdapi/v1/home")

      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductsSuccess(json.product));
        return json.product;
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
