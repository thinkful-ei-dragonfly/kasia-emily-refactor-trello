import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import STORE from "./STORE";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={STORE} />, rootElement);
