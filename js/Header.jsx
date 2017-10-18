// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Header = (props: { showSearch?: boolean, handleSearchTermChange: Function, searchTerm: string }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        className="header-input"
        type="text"
        placeholder="search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link className="details-back" to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <section>
      <Link className="details-header" to="/">
        BookClub
      </Link>
      {utilSpace}
    </section>
  );
};

Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
