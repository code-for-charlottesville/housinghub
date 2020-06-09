import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import sampleMockStore from "../../test/mockStore.js";
import SearchProperty from "./SearchProperty";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("containers/SearchProperty", () => {
  let _matchesSnapshot = (C, props = {}, path) => {
    let store = mockStore({
      ...sampleMockStore,
      search: {
        ...sampleMockStore.search,
        searchResults: props.searchResults,
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
      component: SearchProperty,
      path: "/property/search",
      props: {
        searchResults: {
          pagination: {
            page: 0,
            results_per_page: 0,
            totalNumberOfResults: 0,
          },
          results: [
            {
              address: "string",
              allow_criminal_records: true,
              application_fee: 0,
              background_screening_company: "string",
              bathrooms: 0,
              bedrooms: 0,
              bus_line: true,
              contact_method: ["string"],
              credit_screening_company: "string",
              date_first_available: "string",
              deposit: 0,
              elevator: true,
              floor: 0,
              has_basement: true,
              housing_type: "string",
              id: "string",
              is_available: true,
              landlord_id: "string",
              last_contact_date: "string",
              last_contacted_by: "string",
              last_month_rent_required: true,
              listing_date: "string",
              monthly_rent: 0,
              navigator_id: "string",
              potential_month_available: 0,
              property_name: "string",
              school_district: "string",
              shared_bathrooms: 0,
              unit_apt_no: "string",
              voucher_type_accepted: ["string"],
              voucher_type_not_accepted: ["string"],
              wheelchair_accessibility: true,
              where_listed: ["string"],
              year_available: 0,
              zip_code: "string",
            },
          ],
        },
      },
    },
  ];

  testTable.forEach((t) => {
    it(t.name, () => {
      _matchesSnapshot(t.component, t.props, t.path);
    });
  });
});
