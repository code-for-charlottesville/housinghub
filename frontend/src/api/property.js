import axios from "axios";

/**
 * makes POST request to /backend/property with id
 **/

export function postProperty({ id }) {
  return axios
    .post("/backend/property", {
      id: id,
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}
