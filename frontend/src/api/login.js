import axios from "axios";

/**
 * makes POST request to /auth/login with username and password
 **/
export function postAuthLogin({ email, password }) {
  return axios
    .post("/backend/auth/login", {
      username: email,
      password
    })
    .then(r => {
      return Promise.resolve(r.data);
    })
    .catch(err => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}
