import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../containers/About.jsx";
import Login from "../containers/Login.jsx";
import Photos from "../containers/photos.jsx";
import NotFound from "../containers/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/photos" component={Photos} />
        <Route path="/photos/:name" component={Photos} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
