import * as login from "./login";
import moxios from "moxios";
import sinon from "sinon";
import axios from "axios";

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
        name: "successfull response",
        url: "/backend/auth/login",
        args: { email: "user@gmail.com", password: "password" },
        statusCode: 200,
        response: {
          jwt: "sdfsdfsdfsdf",
        },
        expectedResponse: { jwt: "sdfsdfsdfsdf" },
      },
      {
        name: "bad response from server",
        url: "/backend/auth/login",
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
        });
        moxios.wait(function () {
          expect(onFulfilled.getCall(0)).not.toBeUndefined();
          done();
        });
      });
    });
  });
});
