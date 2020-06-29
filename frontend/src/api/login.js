import axios from "axios";
import apiEndpoint from "./endpoint";

/**
 * makes POST request to /auth/login with username and password
 **/
export function postAuthLogin({ email, password }) {
  return axios
    .post(`${apiEndpoint}/auth/login`, {
      username: email,
      password,
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((error) => {
      return Promise.resolve({
        error:
          (error.response.data && error.response.data.error) ||
          error.response.statusText,
      });
    });
}

/**
 * makes GET request to see if current token is valid
 **/
export function getStatus(jwt) {
  return axios
    .get(`${apiEndpoint}/auth/status`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((error) => {
      return Promise.resolve({
        error:
          (error.response.data && error.response.data.error) ||
          error.response.statusText,
      });
    });
}
