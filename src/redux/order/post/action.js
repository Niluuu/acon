import axios from "axios";

export function orderPost(params) {
  return (dispatch) => {
    dispatch(orderPostBegin());
    return axios
      .post("https://dev.mod.uz/mdapi/v1/checkout", params)
      .then((res) => res.json())
      .then((json) => {
        dispatch(orderPostSuccess(json));
        return json;
      })
      .catch((error) => dispatch(orderPostFailure(error)));
  };
}

export const ORDER_POST_BEGIN = "ORDER_POST_BEGIN";
export const ORDER_POST_SUCCESS = "ORDER_POST_SUCCESS";
export const ORDER_POST_FAILURE = "ORDER_POST_FAILURE";

export const orderPostBegin = () => ({
  type: ORDER_POST_BEGIN,
});

export const orderPostSuccess = (products) => ({
  type: ORDER_POST_SUCCESS,
  payload: { products },
});

export const orderPostFailure = (error) => ({
  type: ORDER_POST_FAILURE,
  payload: { error },
});
