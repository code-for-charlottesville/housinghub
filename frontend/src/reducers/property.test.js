import property from "./property";

describe("reducers/appState", () => {
  beforeEach(() => {
    Date.now = jest.fn(() => Date.parse("2020-06-01"));
  });


  let testTable = [
    {
      name: "set new prop",
      action: {
        type: "SET_NEWPROP_SUCCESS",
        id: "test id",
      },
    },
    {
      name: "set new prop failure",
      action: {
        type: "SET_NEWPROP_FAILURE",
        error: "new prop error",
      },
    },
    {
      name: "add property field (doesnt already exist)",
      action: {
        type: "SET_ADD_PROPERTY_FIELD",
        fieldName: "test field",
        newValue: "new test value",
      },
    },
    {
      name: "add property field (already exists)",
      action: {
        type: "SET_ADD_PROPERTY_FIELD",
        fieldName: "property_name",
        newValue: "new prop test",
      },
    },
    {
      name: "add property field (is array and already exists)",
      action: {
        type: "SET_ADD_PROPERTY_FIELD",
        fieldName: "where_listed",
        newValue: "new prop test",
      },
    },
  ];
  testTable.forEach((t) => {
    it(t.name, () => {
      expect(property(undefined, t.action)).toMatchSnapshot();
    });
  });
});
