import axios from "axios";

/**
 * makes POST request to /backend/property/search with query
 **/

export function postQuery(query) {
  return axios
    .post("/backend/property/search", query)
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}