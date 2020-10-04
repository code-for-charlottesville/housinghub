import { postQuery } from "../api/search";
import { setLoading } from "./appState";
import store from "../reducers/index";

export function setPaginationQuery(fieldName, newValue) {
  return {
    type: "SET_PAGINATION_QUERY",
    fieldName,
    newValue,
  };
}

export function setSearchfieldsQuery(fieldName, newValue) {
  return {
    type: "SET_SEARCHFIELDS_QUERY",
    fieldName,
    newValue,
  };
}

export function setPaginationResults(fieldName, newValue) {
  return {
    type: "SET_PAGINATION_RESULTS",
    fieldName,
    newValue,
  };
}

export function setSearchResults(response) {
  return {
    type: "SET_SEARCH_RESULTS",
    response,
  };
}

/**
 * fires when user attempts to POST new query
 **/
export function searchProperties() {
  console.log('called')
  store.dispatch(setLoading(true));
  // Make API call to backend/property/search
  postQuery(store.getState().search.query).then((response) => {
    store.dispatch(setLoading(false));
    if (response && response.results) {
      if (response.results.length > 0) {
        console.log(response);
        store.dispatch(setSearchResults(response));
      } else {
        // TODO: Should change the state here.
        console.log("No matches found");
      }
    } else {
      console.error("Could not search property: %o", response);
    }
  });
}
