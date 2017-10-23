// @flow

import axios from "axios";
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData: Book) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(id: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error("axios error", error); // eslint-disable-line no-console
      });
  };
}

export default SET_SEARCH_TERM && ADD_API_DATA;
