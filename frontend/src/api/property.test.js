import * as property from "./property";
import moxios from "moxios";
import sinon from "sinon";
import axios from "axios";
import apiEndpoint from "./endpoint";

describe("api/property", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  let sampleProperty = {
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
  };
  describe("postProperty", () => {
    let testTable = [
      {
        name: "successful response",
        url: `${apiEndpoint}/property`,
        args: sampleProperty,
        statusCode: 200,
        response: sampleProperty,
        expectedResponse: sampleProperty,
      },
      {
        name: "bad request",
        url: `${apiEndpoint}/property`,
        args: {},
        statusCode: 400,
        response: {
          code: 400,
          error: "bad request",
        },
        expectedResponse: { code: 400, error: "bad request" },
      },
    ];

    testTable.forEach((t) => {
      it(t.name, (done) => {
        moxios.stubRequest(t.url, {
          status: t.statusCode,
          response: t.response,
        });
        let onFulfilled = sinon.spy();
        property.postProperty(t.args).then((r) => {
          expect(r).toEqual(t.expectedResponse);
          done();
        });
      });
    });
  });
});
