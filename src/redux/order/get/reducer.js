import {
  ORDER_GET_BEGIN,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAILURE,
} from "./action";

const initialState = {
  order: [],
  loading: false,
  error: null,
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case ORDER_GET_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ORDER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload.products,
      };
    case ORDER_GET_FAILURE:
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
