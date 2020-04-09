import { postAuthLogin } from "../api/login";
import { setLoading } from "./appState";
import store from "../reducers/index";

export function setLoginField(fieldName, newValue) {
  return {
    type: "SET_LOGIN_FIELD",
    fieldName,
    newValue
  };
}

export function setLoginSuccess(jwt) {
  return {
    type: "SET_LOGIN_SUCCESS",
    jwt
  };
}

export function setLoginFailure(error) {
  return {
    type: "SET_LOGIN_ERROR",
    error
  };
}

/**
 * fires when user attempts to login
 **/
export function loginUser() {
  store.dispatch(setLoading(true));
  // Make API call to backend /auth/login
  postAuthLogin(store.getState().login.fields).then(response => {
    store.dispatch(setLoading(false));
    if (response && response.jwt) {
      store.dispatch(setLoginSuccess(response.jwt));
    } else {
      store.dispatch(setLoginFailure(response.error));
    }
  });
}
