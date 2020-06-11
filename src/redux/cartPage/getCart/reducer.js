import {
  FETCH_GET_CART_BEGIN,
  FETCH_GET_CART_SUCCESS,
  FETCH_GET_CART_FAILURE,
} from "./action";

import {
  FETCH_REMOVE_CART_BEGIN,
  FETCH_REMOVE_CART_SUCCESS,
  FETCH_REMOVE_CART_FAILURE,
} from "../delateCart/action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_CART_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case FETCH_GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    case FETCH_REMOVE_CART_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_REMOVE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case FETCH_REMOVE_CART_FAILURE:
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
