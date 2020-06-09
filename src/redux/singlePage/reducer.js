import {
  FETCH_SINGLE_BEGIN,
  FETCH_SINGLE_SUCCESS,
  FETCH_SINGLE_FAILURE,
} from "./action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function single(state = initialState, action) {
  switch (action.type) {
    case FETCH_SINGLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case FETCH_SINGLE_FAILURE:
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
