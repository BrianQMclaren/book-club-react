import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <pre>{JSON.stringify(preload, null, 4)}</pre>
  </div>
);

export default Search;
