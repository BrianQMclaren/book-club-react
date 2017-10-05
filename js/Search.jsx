// @flow

import React, { Component } from 'react';
import BookCard from './BookCard';

class Search extends Component {
  state = {
    searchTerm: '',
  };
  props: {
    books: Array<Book>,
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="main">
        <form>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <div>
          {this.props.books
            .filter(
              book => `${book.title} ${book.author}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map((book, index) => <BookCard {...book} key={book.id} id={index} />)}
        </div>
      </div>
    );
  }
}

export default Search;
