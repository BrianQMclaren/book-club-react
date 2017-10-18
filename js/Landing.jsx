// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
  static contextTypes = {
    history: object,
  };
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory,
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <header>
          <h1>Book Club</h1>
          <p>Search for your favorite books</p>
          <form onSubmit={this.goToSearch}>
            <input
              onChange={this.props.handleSearchTermChange}
              value={this.props.searchTerm}
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

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
