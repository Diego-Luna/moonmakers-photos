import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";

//
import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import serverRoutes from "../frontend/routes/serverRoutes";
import { StateProvider } from "../frontend/state/index";

// import initialState from '../frontend/initialState';
import getManifest from "./getManifest";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };
  // const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

// const setResponse = (html, preloadedState,manifest) => {
const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest["main.css"] : "assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";

  // <script>
  //   window.__PRELOADED_STATE__ = $
  //   {JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
  // </script>;

  return `<!DOCTYPE html>
    <html>
      <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MoonMakers Photos</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@300;500&display=swap"
            rel="stylesheet" />

        <link rel="stylesheet"  href="${mainStyles}" type="text/css" />

      </head>
      <body>
        <div id="root">${html}</div>
        <div id="modal"></div>

        <script src="${mainBuild}" type="text/javascript" ></script>
      </body>
    </html>
  `;
};

const renderApp = (req, res) => {
  // const store = createStore(reducer, initialState);
  // const preloadedState = store.getState();

  const html = renderToString(
    <StateProvider>
      {/* <Provider store={store}> */}
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </StateProvider>
  );

  res.set(
    "Content-Security-Policy",
    "img-src 'self' https://i.pinimg.com/ https://img.icons8.com/ https://storage.googleapis.com"
  );
  res.send(setResponse(html, req.hashManifest));
  // res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
