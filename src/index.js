import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/ar.css";
import "../src/assets/css/style.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
