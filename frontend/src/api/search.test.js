import * as search from "./search";
import moxios from "moxios";
import sinon from "sinon";
import axios from "axios";
import apiEndpoint from "./endpoint";

describe("api/search", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("postQuery", () => {
    let sampleQuery = {
      pagination: {
        page: 0,
        results_per_page: 0,
      },
      searchFields: {
        bathrooms: 0,
        bedrooms: 0,
        date_available: "string",
        housing_type: ["string"],
        max_rent: 0,
        min_rent: 0,
        zip_code: ["string"],
      },
    };
    let sampleResult = {
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
    };

    let testTable = [
      {
        name: "successful response",
        url: `${apiEndpoint}/property/search`,
        args: sampleQuery,
        statusCode: 200,
        response: sampleResult,
        expectedResponse: sampleResult,
      },
      {
        name: "bad request",
        url: `${apiEndpoint}/property/search`,
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
        search.postQuery(t.args).then((r) => {
          expect(r).toEqual(t.expectedResponse);
          done();
        });
      });
    });
  });
});
