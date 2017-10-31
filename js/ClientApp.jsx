// @flow

import React from "react";
import { render } from "react-dom";
import { Tap } from "react-hydrate";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const renderApp = () => {
  render(
    <BrowserRouter>
      <AppContainer>
        <Tap hydrate={window || null}>
          <App />
        </Tap>
      </AppContainer>
    </BrowserRouter>,
    document.getElementById("app")
  );
};
renderApp();

// const NextApp = require("./App").default;
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
