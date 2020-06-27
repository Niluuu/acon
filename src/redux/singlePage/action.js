export function fetchSingle(id) {
  const uid = Math.random();
  const localId = window.localStorage.getItem("uid");

  if (localId === null) {
    window.localStorage.setItem("uid", JSON.stringify(uid));
  }

  return (dispatch) => {
    dispatch(fetchSingleBegin());
    return fetch(`https://dev.mod.uz/mdapi/v1/products/${id}/detail`, {
      headers: {
        "X-VISITOR-UID": window.localStorage.getItem("uid"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchSingleSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchSingleFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_SINGLE_BEGIN = "FETCH_SINGLE_BEGIN";
export const FETCH_SINGLE_SUCCESS = "FETCH_SINGLE_SUCCESS";
export const FETCH_SINGLE_FAILURE = "FETCH_SINGLE_FAILURE";

export const fetchSingleBegin = () => ({
  type: FETCH_SINGLE_BEGIN,
});

export const fetchSingleSuccess = (products) => ({
  type: FETCH_SINGLE_SUCCESS,
  payload: { products },
});

export const fetchSingleFailure = (error) => ({
  type: FETCH_SINGLE_FAILURE,
  payload: { error },
});
