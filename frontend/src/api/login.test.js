import * as login from "./login";
import moxios from "moxios";
import sinon from "sinon";
import axios from "axios";
import apiEndpoint from "./endpoint";

describe("api/login", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe("postAuthLogin", () => {
    let testTable = [
      {
        name: "successful response",
        url: `${apiEndpoint}/auth/login`,
        args: { email: "user@gmail.com", password: "password" },
        statusCode: 200,
        response: {
          jwt: "sdfsdfsdfsdf",
        },
        expectedResponse: { jwt: "sdfsdfsdfsdf" },
      },
      {
        name: "bad response from server",
        url: `${apiEndpoint}/auth/login`,
        args: { email: "user@gmail.com", password: "password" },
        statusCode: 500,
        response: {
          code: 500,
          error: "internal server error",
        },
        expectedResponse: { error: "internal server error" },
      },
    ];

    testTable.forEach((t) => {
      it(t.name, (done) => {
        moxios.stubRequest(t.url, {
          status: t.statusCode,
          response: t.response,
        });
        let onFulfilled = sinon.spy();
        login.postAuthLogin(t.args).then((r) => {
          expect(r).toEqual(t.expectedResponse);
          done();
        });
      });
    });
  });
  describe("getStatus", () => {
    let testTable = [
      {
        name: "successful response",
        url: `${apiEndpoint}/auth/status`,
        args: "sdflkjsdlfkjsdlfkjsdf",
        statusCode: 200,
        response: {
          jwt: "sdfsdfsdfsdf",
        },
        expectedResponse: { jwt: "sdfsdfsdfsdf" },
      },
      {
        name: "error from server",
        url: `${apiEndpoint}/auth/status`,
        args: "sdflkjsdlfkjsdlfkjsdf",
        statusCode: 500,
        response: {
          code: 500,
          error: "invalid jwt",
        },
        expectedResponse: { error: "invalid jwt" },
      },
    ];

    testTable.forEach((t) => {
      it(t.name, (done) => {
        moxios.stubRequest(t.url, {
          status: t.statusCode,
          response: t.response,
        });
        let onFulfilled = sinon.spy();
        login.getStatus(t.args).then((r) => {
          expect(r).toEqual(t.expectedResponse);
          done();
        });
      });
    });
  });
});
