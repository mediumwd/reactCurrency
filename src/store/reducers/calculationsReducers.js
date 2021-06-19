import {
  CALCULATION_STARTED,
  CALCULATION_SUCCESS,
  CALCULATION_FAILURE
} from "../actions/actionTypes";

const initialState = {
  result: null,
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALCULATION_STARTED:
      return {
        ...state,
        loading: true
      };
    case CALCULATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        result: action.payload.result
      };
    case CALCULATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
