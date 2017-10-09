// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 52%;
  border: 1px solid;
  border-color: rgba(210, 210, 210, 0.5);
  padding-right: 10px;
  margin-bottom: 25px;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  float: left;
  width: 33%;
  margin-right: 10px;
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
          <h3>{this.props.title}</h3>
          <h4>{this.props.author}</h4>
          <p>{this.props.genre}</p>
        </div>
      </Wrapper>
    );
  }
}
export default BookCard;
