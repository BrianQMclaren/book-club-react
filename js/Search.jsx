// @flow

import React from "react";
import { connect } from "react-redux";
import BookCard from "./BookCard";
import Header from "./Header";

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  books: Array<Book>
}) => (
  <div>
    <Header showSearch className="details" />
    <div className="search">
      {props.books
        .filter(
          book =>
            `${book.title} ${book.author}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(book => <BookCard {...book} key={book.id} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
