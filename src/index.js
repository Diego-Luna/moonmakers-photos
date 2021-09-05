import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";

// importamos nuestro provider, (el estado de nuestra web app)
import { StateProvider } from "./State/index";

import "./assets/styles/style.css";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
