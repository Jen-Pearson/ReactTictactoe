import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Game from "./Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Game />
  </React.StrictMode>,
  rootElement
);
