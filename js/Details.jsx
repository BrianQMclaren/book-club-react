// @flow

import React from 'react';

const Details = (props: { book: Book }) => {
  const { title, author, genre, cover } = props.book;
  return (
    <div className="details">
      <header>BookClub</header>
      <section>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{genre}</p>
        <img src={`public/images/books/${cover}`} alt={`Book cover for ${title}`} />
      </section>
    </div>
  );
};

export default Details;
