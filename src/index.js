import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Reducer from "./components/store/Reducer";
import { Provider } from "react-redux"; //to inject the global store
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./components/sagas/saga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchAgeUp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
