// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled((Link: any))`
  text-decoration: none;
  color: black;
  margin: 0 auto;
`;

const Image = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.15em;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

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
