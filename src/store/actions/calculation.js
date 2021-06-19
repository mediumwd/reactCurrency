import {
  CALCULATION_STARTED,
  CALCULATION_FAILURE,
  CALCULATION_SUCCESS
} from "./actionTypes";
import axios from "axios";

export const calculation = (from, to, amount) => {
  return dispatch => {
    dispatch(calculationStarted());

    axios
      .get("https://free.currconv.com/api/v7/convert?apiKey=0eecd436a861fc1cf0a7&q=" + from + "_" + to + "&compact=ultra")
      .then(res => {
      	var data = res.[from + "_" + to];
      	data = data * amount;
        dispatch(calculationSuccess(data));
      })
      .catch(err => {
        dispatch(calculationFailed(err.message));
      });
  };
};

const calculationStarted = () => {
  return {
    type: CALCULATION_STARTED,
    payload: {
      isLoading: true
    }
  };
};

const calculationSuccess = result => {
  return {
    type: CALCULATION_SUCCESS,
    payload: {
      result
    }
  };
};

const calculationFailed = error => {
  return {
    type: CALCULATION_FAILURE,
    payload: {
      error
    }
  };
};
