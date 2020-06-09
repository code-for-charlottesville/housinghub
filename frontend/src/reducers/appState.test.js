import appState from "./appState";

describe("reducers/appState", () => {
  let testTable = [
    {
      name: "sets loading",
      action: {
        type: "SET_LOADING",
        loading: true,
      },
    },
    {
      name: "set sidebar open",
      action: {
        type: "SET_SIDEBAR_OPEN",
        sidebarOpen: true,
      },
    },
  ];
  testTable.forEach((t) => {
    it(t.name, () => {
      expect(appState(undefined, t.action)).toMatchSnapshot();
    });
  });
});
