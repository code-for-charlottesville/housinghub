import axios from "axios";

/**
 * makes POST request to /backend/property with id
 **/

export function postProperty(property) {
  return axios
    .post("/backend/property", property)
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}
