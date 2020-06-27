import axios from "axios";

export function getWished() {
  const uid = Math.random();
  const localId = window.localStorage.getItem("uid");

  if (localId === null) {
    window.localStorage.setItem("uid", JSON.stringify(uid));
  }

  return (dispatch) => {
    dispatch(getWishedBegin());
    return fetch("https://dev.mod.uz/mdapi/v1/favorites", {
      headers: {
        "X-VISITOR-UID": window.localStorage.getItem("uid"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getWishedSuccess(json));
        return json;
      })
      .catch((error) => dispatch(getWishedFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const GET_WISHED_BEGIN = "GET_WISHED_BEGIN";
export const GET_WISHED_SUCCESS = "GET_WISHED_SUCCESS";
export const GET_WISHED_FAILURE = "GET_WISHED_FAILURE";

export const getWishedBegin = () => ({
  type: GET_WISHED_BEGIN,
});

export const getWishedSuccess = (products) => ({
  type: GET_WISHED_SUCCESS,
  payload: { products },
});

export const getWishedFailure = (error) => ({
  type: GET_WISHED_FAILURE,
  payload: { error },
});
