import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StateContex } from "../state";

import About from "../containers/about.jsx";
// import Photos from "../containers/photos.jsx";
import Photos from "../containers/photos";
import NotFound from "../containers/notfound.jsx";

function App() {
  const { llamarApiDatosAll } = React.useContext(StateContex);

  React.useEffect(() => {
    llamarApiDatosAll();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        {/* <Route exact path="/photos" component={Photos} /> */}
        <Route exact path="/photos/" component={Photos} />
        <Route exact path="/photos/:name" component={Photos} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
