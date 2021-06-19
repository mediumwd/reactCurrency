import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Calculate from "./Calculate";

function App() {
  return (
    <div className="App">
      <Calculate />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
