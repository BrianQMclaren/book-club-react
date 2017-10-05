// @flow

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app'),
  );
};
renderApp();

const NextApp = require('./App').default;
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
