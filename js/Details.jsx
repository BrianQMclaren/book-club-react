// @flow

import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Image = styled.img`
  margin: 0 auto;
  position: relative;
  bottom: 80px;
  left: 40px;
  @media (max-width: 769px) {
    bottom: 0;
    left: 0;
  }
`;

const Details = (props: { book: Book }) => {
  const { title, author, genre, cover, description } = props.book;
  return (
    <div>
      <div className="details">
        <Header />
        <section>
          <h2>{title}</h2>
          <h3>{`Author: ${author}`}</h3>
          <h4>{`Genre: ${genre}`}</h4>
          <Image src={`/public/images/books/${cover}`} alt={`Book cover for ${title}`} />
          <p>{description}</p>
        </section>
      </div>
    </div>
  );
};

export default Details;
