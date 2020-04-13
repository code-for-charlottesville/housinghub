import store from "../reducers/index";

export function setUser(fieldName, newValue) {
  return {
    type: "SET_USER",
    fieldName,
    newValue,
  };
}

export function checkPassword() {
  /*do I make password confirmation here?*/
}

export function addUser() {
  /*need to add post new user */
}
