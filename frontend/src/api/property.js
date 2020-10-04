import axios from "axios";
import apiEndpoint from "./endpoint";

/**
 * makes POST request to /backend/property with property
 **/

export function postProperty(property) {
  return axios
    .post(`${apiEndpoint}/property`, property)
    .then((r) => {
      console.log(property);
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(err.response.data);
    });
}
