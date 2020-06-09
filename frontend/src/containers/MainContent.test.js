import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import sampleMockStore from "../../test/mockStore.js";
import MainContent from "./MainContent";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("containers/MainContent", () => {
  let _matchesSnapshot = (C, props = {}, path) => {
    let store = mockStore({
      ...sampleMockStore,
      login: {
        ...sampleMockStore.login,
        isLoggedIn: props.isLoggedIn,
      },
    });
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={[path]}>
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
      name: "redirects to login if not logged in",
      component: MainContent,
      path: "/",
      props: {
        isLoggedIn: false,
      },
    },
    {
      name: "renders new prop form on /property/new",
      component: MainContent,
      path: "/property/new",
      props: {
        isLoggedIn: true,
      },
    },
    {
      name: "renders search prop form on /property/search",
      component: MainContent,
      path: "/property/search",
      props: {
        isLoggedIn: true,
      },
    },
    {
      name: "renders home when nothing else matches",
      component: MainContent,
      path: "/",
      props: {
        isLoggedIn: true,
      },
    },
  ];

  testTable.forEach((t) => {
    it(t.name, () => {
      _matchesSnapshot(t.component, t.props, t.path);
    });
  });
});
