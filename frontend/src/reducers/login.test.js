import login from "./login";

describe("reducers/appState", () => {
  let testTable = [
    {
      name: "logout",
      action: {
        type: "LOGOUT",
      },
    },
    {
      name: "login success",
      action: {
        type: "SET_LOGIN_SUCCESS",
      },
    },
    {
      name: "login error",
      action: {
        type: "SET_LOGIN_ERROR",
        error: "sample error",
      },
    },
    {
      name: "set login field",
      action: {
        type: "SET_LOGIN_FIELD",
        fieldName: "testField",
        newValue: "new value",
      },
    },
  ];
  testTable.forEach((t) => {
    it(t.name, () => {
      expect(login(undefined, t.action)).toMatchSnapshot();
    });
  });
});
