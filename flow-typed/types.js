// @flow

export type Book = {
  title: string,
  author: string,
  genre: string,
  cover: string,
  id: string,
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};
