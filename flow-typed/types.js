// @flow

export type Book = {
  title: string,
  author: string,
  genre: string,
  cover: string,
  id: string,
  description: string,
  rating?: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = "SET_SEARCH_TERM" | "ADD_API_DATA";

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action =
  | ActionT<"SET_SEARCH_TERM", string>
  | ActionT<"ADD_API_DATA", Book>;
