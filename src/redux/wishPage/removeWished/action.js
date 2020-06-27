export function removeWished(id) {
  return (dispatch) => {
    dispatch(removeWishedBegin());
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
        dispatch(removeWishedSuccess(json));
        return json;
      })
      .catch((error) => dispatch(removeWishedFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const WISHED_REMOVE_BEGIN = "WISHED_REMOVE_BEGIN";
export const WISHED_REMOVE_SUCCESS = "WISHED_REMOVE_SUCCESS";
export const WISHED_REMOVE_FAILURE = "WISHED_REMOVE_FAILURE";

export const removeWishedBegin = () => ({
  type: WISHED_REMOVE_BEGIN,
});

export const removeWishedSuccess = (products) => ({
  type: WISHED_REMOVE_SUCCESS,
  payload: { products },
});

export const removeWishedFailure = (error) => ({
  type: WISHED_REMOVE_FAILURE,
  payload: { error },
});
