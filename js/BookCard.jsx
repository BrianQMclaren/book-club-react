// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 52%;
  border: 1px solid;
  border-color: rgba(210, 210, 210, 0.5);
  padding-right: 10px;
  margin-bottom: 25px;
`;

const Image = styled.img`
  float: left;
  width: 33%;
  margin-right: 10px;
`;

const BookCard = (props: { cover: string, title: string, author: string, genre: string }) => (
  <Wrapper>
    <Image alt={`${props.title} Show Book`} src={`/public/images/books/${props.cover}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <p>{props.genre}</p>
    </div>
  </Wrapper>
);

export default BookCard;
