import {
  FETCH_CURRENCIES_STARTED,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_SUCCESS
} from "./actionTypes";
import axios from "axios";

export const fetchCurrencies = () => {
  return dispatch => {
    dispatch(fetchCurrenciesStarted());

    axios
      .get("https://free.currconv.com/api/v7/currencies?apiKey=0eecd436a861fc1cf0a7")
      .then(res => {
        dispatch(fetchCurrenciesSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(fetchCurrenciesFailed(err.message));
      });
  };
};

const fetchCurrenciesStarted = () => {
  return {
    type: FETCH_CURRENCIES_STARTED,
    payload: {
      isLoading: true
    }
  };
};

const fetchCurrenciesSuccess = currencies => {
  return {
    type: FETCH_CURRENCIES_SUCCESS,
    payload: {
      currencies
    }
  };
};

const fetchCurrenciesFailed = error => {
  return {
    type: FETCH_CURRENCIES_FAILURE,
    payload: {
      error
    }
  };
};