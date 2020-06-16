export function orderGet() {
  return (dispatch) => {
    dispatch(orderGetBegin());
    return fetch("https://dev.mod.uz/mdapi/v1/checkout")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(orderGetSuccess(json));
        return json;
      })
      .catch((error) => dispatch(orderGetFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const ORDER_GET_BEGIN = "ORDER_GET_BEGIN";
export const ORDER_GET_SUCCESS = "ORDER_GET_SUCCESS";
export const ORDER_GET_FAILURE = "ORDER_GET_FAILURE";

export const orderGetBegin = () => ({
  type: ORDER_GET_BEGIN,
});

export const orderGetSuccess = (products) => ({
  type: ORDER_GET_SUCCESS,
  payload: { products },
});

export const orderGetFailure = (error) => ({
  type: ORDER_GET_FAILURE,
  payload: { error },
});
