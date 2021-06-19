import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import curenciesReducers from "./reducers/curenciesReducers";
const rootReducer = combineReducers({
  currencies: curenciesReducers
});

const store = createStore(rootReducer,  compose(applyMiddleware(reduxThunk)));

export default store;