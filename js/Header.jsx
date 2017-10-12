// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
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
  handleSearchTermChange: function noop() {},
  searchTerm: false,
};

export default Header;
