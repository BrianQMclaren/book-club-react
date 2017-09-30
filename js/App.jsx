import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app">
    <Route exact path="/" component={Landing} />
    <Route exact path="search" component={Search} />
    <Route component={FourOhFour} />
  </div>
);

export default App;
