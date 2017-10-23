// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAPIDetails } from "./actionCreators";
import Header from "./Header";

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

class Details extends Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }
  props: {
    book: Book,
    rating: string,
    getAPIData: Function
  };
  render() {
    const { title, author, genre, cover, description } = this.props.book;
    return (
      <div>
        <div className="details">
          <Header />
          <section>
            <h2>{title}</h2>
            <h3>{`Author: ${author}`}</h3>
            <h4>{`Genre: ${genre}`}</h4>
            <Image
              src={`/public/images/books/${cover}`}
              alt={`Book cover for ${title}`}
            />
            <p>{description}</p>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.book.id]
    ? state.apiData[ownProps.book.id]
    : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.book.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
