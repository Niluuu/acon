export function fetchHome() {
  return (dispatch) => {
    dispatch(fetchHomeBegin());
    return fetch(`https://dev.mod.uz/mdapi/v1`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchHomeSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchHomeFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_HOME_BEGIN = "FETCH_HOME_BEGIN";
export const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS";
export const FETCH_HOME_FAILURE = "FETCH_HOME_FAILURE";

export const fetchHomeBegin = () => ({
  type: FETCH_HOME_BEGIN,
});

export const fetchHomeSuccess = (products) => ({
  type: FETCH_HOME_SUCCESS,
  payload: { products },
});

export const fetchHomeFailure = (error) => ({
  type: FETCH_HOME_FAILURE,
  payload: { error },
});
