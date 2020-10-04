import axios from "axios";
import apiEndpoint from "./endpoint";

/**
 * makes POST request to /backend/property/search with query
 **/

export function postQuery(query) {
  console.log("postQuery");
  return axios
    .post(`${apiEndpoint}/property/search`, query)
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}
