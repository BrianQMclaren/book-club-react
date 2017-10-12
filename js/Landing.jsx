// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  state = {
    searchTerm: '',
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="landing">
        <header>
          <h1>Book Club</h1>
          <p>Search for your favorite books</p>
          <form>
            <input
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
              placeholder="Add your favorite books"
            />
            <button>
              <Link to="/search">Browse</Link>
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default Landing;
