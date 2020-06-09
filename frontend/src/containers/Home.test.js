import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import sampleMockStore from "../../test/mockStore.js";
import Home from "./home";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("components", () => {
  let _matchesSnapshot = (C, props = {}) => {
    let store = mockStore({
      ...sampleMockStore,
      appState: {
        ...sampleMockStore.appState,
        loading: props.loading,
        uid: props.uid,
      },
    });
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
          <Provider store={store}>
            <C {...props} />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  };

  let testTable = [
    {
      name: "renders spinner if loading",
      component: Home,
      props: {
        loading: true,
        uid: "davidrulz",
      },
    },
    {
      name: "renders full media when not loading",
      component: Home,
      props: {
        loading: false,
        uid: "davidrulz",
      },
    },
  ];

  testTable.forEach((t) => {
    it(t.name, () => {
      _matchesSnapshot(t.component, t.props);
    });
  });
});
