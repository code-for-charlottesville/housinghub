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

export function setSearchResults(resultList) {
  return {
    type: "SET_SEARCH_RESULTS",
    resultList,
  };
}
