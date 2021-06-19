import {
  FETCH_CURRENCIES_STARTED,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_SUCCESS,
  UPDATE_VALUES,
  CALCULATE
} from "../actions/actionTypes";

const initialState = {
  currencies: [],
  loading: false,
  error: null,
  from: null,
  to: null,
  amount: null,
  calc: null
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
    case UPDATE_VALUES:
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to,
        amount: action.payload.amount,
      };
      case CALCULATE:
      return{
        ...state,
        calc: action.payload.calc
      }
    default:
      return state;
  }
}
