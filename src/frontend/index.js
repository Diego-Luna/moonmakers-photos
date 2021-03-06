import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/app";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// importamos nuestro provider, (el estado de nuestra web app)
import { StateProvider } from "./state/index";

import "animate.css";
import "./assets/styles/style.css";
import "./assets/styles/responsive/tablet.css";
import "aos/dist/aos.css";

const history = createBrowserHistory();

// const preloadedState = window.__PRELOADED_STATE__;

// delete window.__PRELOADED_STATE__;

// ReactDOM.render(
ReactDOM.hydrate(
  <StateProvider>
    <Router history={history}>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);
