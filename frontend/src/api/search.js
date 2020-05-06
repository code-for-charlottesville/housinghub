import axios from "axios";

/*
* make POST request to /backend/property/search 
*/
export function postSearchQuery(query) {
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