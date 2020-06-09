import axios from "axios";

/**
 * makes POST request to /backend/property with property
 **/

export function postProperty(property) {
  return axios
    .post("/backend/property", property)
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}
