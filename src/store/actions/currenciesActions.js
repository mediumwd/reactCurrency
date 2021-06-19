import {
  FETCH_CURRENCIES_STARTED,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_SUCCESS,
  UPDATE_VALUES,
  CALCULATE
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

export const calculate = (from, to, amount) => {
  return dispatch => {
    console.log(from,to,amount);
    if(from && to && amount){
      axios
      .get("https://free.currconv.com/api/v7/convert?apiKey=0eecd436a861fc1cf0a7&q=" + from + "_" + to + "&compact=ultra")
      .then(res => {
        var data = res.[from + "_" + to];
        data = data * amount;
        dispatch(calculationSuccess(data));
      })
      .catch(err => {
        dispatch(calcFailed(err.message));
      });
    }
    
  };
}

export const updateValues = (from, to, amount) => {
  return dispatch => {
    console.log(from,to,amount);
    setValues(from,to,amount);
  };
}

const calculationSuccess = (data) => {
  return {
    type: FETCH_CURRENCIES_STARTED,
    payload: {
      calc: data
    }
  };
};

const calcFailed = (calc) => {
  return {
    type: FETCH_CURRENCIES_SUCCESS,
    payload: {
      calc
    }
  };
};

const setValues = (from,to,amount) => {
  return {
    type: UPDATE_VALUES,
    payload: {
      from: from,
      to: to,
      amount: amount
    }
  };
};
