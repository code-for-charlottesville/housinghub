import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import sampleMockStore from "../../test/mockStore.js";
import Login from "./Login";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("containers/Login", () => {
  let _matchesSnapshot = (C, props = {}) => {
    let store = mockStore({
      ...sampleMockStore,
      appState: {
        ...sampleMockStore.appState,
        loading: props.loading,
      },
      login: {
        ...sampleMockStore.login,
        ...props,
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
      name: "renders fields",
      component: Login,
      props: {
        fields: {
          rememberMe: true,
          password: "test",
          email: "user@gmail.com",
        },
        isLoggedIn: false,
        loading: false,
        error: "sample error",
      },
    },
    {
      name: "renders nothing is already logged in",
      component: Login,
      props: {
        isLoggedIn: true,
      },
    },
    {
      name: "loading spinner if loading",
      component: Login,
      props: {
        isLoggedIn: false,
        loading: true,
      },
    },
  ];

  testTable.forEach((t) => {
    it(t.name, () => {
      _matchesSnapshot(t.component, t.props);
    });
  });
});
