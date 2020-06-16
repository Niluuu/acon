import {
  ORDER_POST_BEGIN,
  ORDER_POST_SUCCESS,
  ORDER_POST_FAILURE,
} from "./action";

const initialState = {
  order: [],
  loading: false,
  error: null,
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case ORDER_POST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ORDER_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload.products,
      };
    case ORDER_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        order: [],
      };
    default:
      return state;
  }
}
