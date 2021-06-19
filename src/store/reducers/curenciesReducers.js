import {
  FETCH_CURRENCIES_STARTED,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  currencies: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
   
    case FETCH_CURRENCIES_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currencies: action.payload.currencies
      };
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}