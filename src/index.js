import React from "react";
import ReactDOM from "react-dom";
import createRoot from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";

let rerenderAppTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderAppTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderAppTree(state);
});
