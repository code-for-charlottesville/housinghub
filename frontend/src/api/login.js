import axios from "axios";

/**
 * makes POST request to /auth/login with username and password
 **/
export function postAuthLogin({ email, password }) {
  return axios
    .post("/backend/auth/login", {
      username: email,
      password,
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}

/**
 * makes GET request to see if current token is valid
 **/
export function getStatus(jwt) {
  return axios
    .get("/backend/auth/status", {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((e) => {
      return Promise.resolve(e.response.data);
    });
}
