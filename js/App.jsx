// @flow

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={props => <Search books={preload.books} {...props} />} />
      <Route
        exact
        path="/details/:id"
        component={(props: { match: Match }) => {
          const selectedBook = preload.books.find((book: Book) => props.match.params.id === book.id);
          return <Details book={selectedBook} {...props} />;
        }}
      />
      <Route component={FourOhFour} />
    </div>
  </BrowserRouter>
);

export default App;
