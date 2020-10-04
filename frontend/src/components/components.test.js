import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import sampleMockStore from "../../test/mockStore.js";
import { Footer } from "./Footer";
import { InputField } from "./InputField";
import { InputFieldNum } from "./InputFieldNum";
import { LoadingSpinner } from "./LoadingSpinner";
import Logout from "./Logout";
import Navbar from "./Navbar";
import NewPropForm from "./NewPropForm";
import Pagination from "./Pagination";
import PaymentDetailsForm from "./PaymentDetailsForm";
import PropDetailsForm from "./PropDetailsForm";
import SearchHousingType from "./SearchHousingType";
import SearchZipCode from "./SearchZipCode";
import Table from "./Table";
import VoucherInputs from "./VoucherInputs";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { SEARCH_COLUMNS } from "../constants/global";

const mockStore = configureStore([]);

describe("components", () => {
  let _matchesSnapshot = (C, props = {}) => {
    let store = mockStore(sampleMockStore);
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
      name: "Footer",
      component: Footer,
      props: {},
    },

    {
      name: "InputField",
      component: InputField,
      props: {},
    },
    {
      name: "InputFieldNum",
      component: InputFieldNum,
      props: {},
    },
    {
      name: "LoadingSpinner",
      component: LoadingSpinner,
      props: {},
    },
    {
      name: "Logout",
      component: Logout,
      props: {},
    },
    {
      name: "Navbar",
      component: Navbar,
      props: {},
    },
    {
      name: "NewPropForm",
      component: NewPropForm,
      props: {},
    },
    {
      name: "Pagination",
      component: Pagination,
      props: {},
    },
    {
      name: "PaymentDetailsForm",
      component: PaymentDetailsForm,
      props: {},
    },
    {
      name: "PropDetailsForm",
      component: PropDetailsForm,
      props: {},
    },
    {
      name: "SearchHousingType",
      component: SearchHousingType,
      props: {},
    },
    {
      name: "SearchZipCode",
      component: SearchZipCode,
      props: {},
    },
    {
      name: "Table",
      component: Table,
      props: {
        rows: [],
        columns: SEARCH_COLUMNS,
      },
    },
    {
      name: "VoucherInputs",
      component: VoucherInputs,
      props: {},
    },
    {
      name: "App",
      component: App,
      props: {},
    },
  ];

  testTable.forEach((t) => {
    it(t.name, () => {
      _matchesSnapshot(t.component, t.props);
    });
  });
});
