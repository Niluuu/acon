import {
  FETCH_HOME_BEGIN,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
} from "./action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    default:
      return state;
  }
}
