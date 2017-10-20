// @flow

import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const renderApp = () => {
  hydrate(
    <BrowserRouter>
      <AppContainer>
        <App />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById("app")
  );
};
renderApp();

const NextApp = require("./App").default;
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    hydrate(
      <BrowserRouter>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </BrowserRouter>,
      document.getElementById("app")
    );
  });
}
