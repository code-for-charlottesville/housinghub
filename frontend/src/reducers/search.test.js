import search from "./search";

describe("reducers/appState", () => {
  let testTable = [
    {
      name: "set pagination query",
      action: {
        type: "SET_PAGINATION_QUERY",
        fieldName: "page",
        newValue: 3,
      },
    },
    {
      name: "set search fields query",
      action: {
        type: "SET_SEARCHFIELDS_QUERY",
        fieldName: "bathrooms",
        newValue: 2,
      },
    },
    {
      name: "set pagination results",
      action: {
        type: "SET_PAGINATION_RESULTS",
        fieldName: "page",
        newValue: 5,
      },
    },
    {
      name: "set query results",
      action: {
        type: "SET_SEARCH_RESULTS",
        fieldName: "bathrooms",
        resultList: [],
      },
    },
  ];
  testTable.forEach((t) => {
    it(t.name, () => {
      expect(search(undefined, t.action)).toMatchSnapshot();
    });
  });
});
