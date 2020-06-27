export function fetchFunc(id) {
   const uid = Math.random();
   const localId = window.localStorage.getItem("uid");

   if (localId === null) {
     window.localStorage.setItem("uid", JSON.stringify(uid));
   }
  return (dispatch) => {
    dispatch(fetchBegin());
    return fetch(`https://dev.mod.uz/mdapi/v1/categories/${id}/products`, {
      headers: {
        "X-VISITOR-UID": window.localStorage.getItem("uid"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchBegin = () => ({
  type: FETCH_BEGIN,
});

export const fetchSuccess = (products) => ({
  type: FETCH_SUCCESS,
  payload: { products },
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: { error },
});
