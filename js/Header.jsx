// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  float: right;
  min-width: 250px;
  font-size: 1.3em;
  max-width: 350px;
  width: 95%;
  padding: 0.2em;
  border-radius: 4px;
  border: 1px dotted rgba(0, 0, 0, 0.2);
  margin: 10px;
`;

const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <Input type="text" placeholder="search" value={props.searchTerm} onChange={props.handleSearchTermChange} />
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
