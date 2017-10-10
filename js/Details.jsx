// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5em;
  margin: 0 auto;
  color: #7bcbc4;
  background: #fcfcfc;
  max-width: 900px;
  width: 100%;
  border-radius: 0.35em;
  -webkit-box-shadow: 0 0 26px rgba(0, 0, 0, 0.13);
  box-shadow: 0 0 26px rgba(0, 0, 0, 0.13);
`;

const Image = styled.img`
  margin: 0 auto;
  position: relative;
  bottom: 100px;
  left: 40px;
`;

const P = styled.p`
  float: left;
  width: 50%;
  color: #7bcbc4;
`;

const Details = (props: { book: Book }) => {
  const { title, author, genre, cover, description } = props.book;
  return (
    <div className="details">
      <Wrapper>
        <h2>{title}</h2>
        <h3>{`Author: ${author}`}</h3>
        <h4>{`Genre: ${genre}`}</h4>
        <Image src={`/public/images/books/${cover}`} alt={`Book cover for ${title}`} />
        <P>{description}</P>
      </Wrapper>
    </div>
  );
};

export default Details;
