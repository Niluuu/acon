import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from "./action";

const initialState = {
  category: [],
  loading: false,
  error: null,
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.products,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        category: [],
      };
    default:
      return state;
  }
}
