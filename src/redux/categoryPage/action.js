export function fetchFunc() {
  return (dispatch) => {
    dispatch(fetchBegin());
    return fetch("https://mod.uz/mdapi/v1/categories/18")
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

export const FETCH_BEGIN = " FETCH_BEGIN";
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
