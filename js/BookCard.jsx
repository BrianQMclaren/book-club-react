// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  text-decoration: none;
  color: black;
  margin: 0 auto;
`;

const Image = styled.img``;

class BookCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: { cover: string, title: string, author: string, genre: string, id: string };
  render() {
    return (
      <Wrapper to={`/details/${this.props.id}`}>
        <Image alt={`${this.props.title} Show Book`} src={`/public/images/books/${this.props.cover}`} />
        <div>
          <ul>
            <li>{this.props.title}</li>
            <li>{this.props.author}</li>
            <li>{this.props.genre}</li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
export default BookCard;
