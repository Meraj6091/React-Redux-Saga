import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Reducer from "./components/store/Reducer";
import { Provider } from "react-redux"; //to inject the global store
import { createStore } from "redux";

const store = createStore(Reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
