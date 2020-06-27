import {
  GET_WISHED_BEGIN,
  GET_WISHED_SUCCESS,
  GET_WISHED_FAILURE,
} from "./action";

import {
  WISHED_REMOVE_BEGIN,
  WISHED_REMOVE_SUCCESS,
  WISHED_REMOVE_FAILURE,
} from "../removeWished/action";

import {
  TOGGLE_WISHED_BEGIN,
  TOGGLE_WISHED_SUCCESS,
  TOGGLE_WISHED_FAILURE,
} from "../addWished/action";

const initialState = {
  data: [],
  loading: false,
  error: null,
  message: [],
};

export default function wished(state = initialState, action) {
  switch (action.type) {
    case GET_WISHED_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_WISHED_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case GET_WISHED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    case WISHED_REMOVE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case WISHED_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
      };
    case WISHED_REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    case TOGGLE_WISHED_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TOGGLE_WISHED_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.products,
      };
    case TOGGLE_WISHED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
