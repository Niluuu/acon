import axios from "axios";

export function toggleWished(productID) {
  const params = {
    product: productID,
  };

  const uid = Math.random();
  const localId = window.localStorage.getItem("uid");

  if (localId === null) {
    window.localStorage.setItem("uid", JSON.stringify(uid));
  }

  return (dispatch) => {
    dispatch(toggleWishedBegin());
    return axios
      .post("https://dev.mod.uz/mdapi/v1/favorites ", params, {
        headers: {
          "X-VISITOR-UID": window.localStorage.getItem("uid"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(toggleWishedSuccess(json));
        return json;
      })
      .catch((error) => dispatch(toggleWishedFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const TOGGLE_WISHED_BEGIN = "TOGGLE_WISHED_BEGIN";
export const TOGGLE_WISHED_SUCCESS = "TOGGLE_WISHED_SUCCESS";
export const TOGGLE_WISHED_FAILURE = "TOGGLE_WISHED_FAILURE";

export const toggleWishedBegin = () => ({
  type: TOGGLE_WISHED_BEGIN,
});

export const toggleWishedSuccess = (products) => ({
  type: TOGGLE_WISHED_SUCCESS,
  payload: { products },
});

export const toggleWishedFailure = (error) => ({
  type: TOGGLE_WISHED_FAILURE,
  payload: { error },
});
