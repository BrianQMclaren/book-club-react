import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <header>
      <h1>Book Club</h1>
      <p>Search for your favorite books</p>
      <input type="text" placeholder="Add your favorite books" />
      <Link to="/search">Or Browse All</Link>
    </header>
  </div>
);

export default Landing;
