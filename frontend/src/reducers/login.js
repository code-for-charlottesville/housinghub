import axios from "axios";

const initialState = {
  error: "",
  isLoggedIn: false,
  fields: {
    email: "",
    password: "",
    rememberMe: true
  }
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      removeJwtFromLocalStorage();
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: false,
        error: ""
      });
    case "SET_LOGIN_SUCCESS":
      if (state.fields.rememberMe) {
        setJwtInLocalStorage(action.jwt);
      }
      axios.defaults.headers.common["Authorization"] = `Beaerer ${action.jwt}`;
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: true,
        error: ""
      });
    case "SET_LOGIN_ERROR":
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: false,
        error: action.error
      });
    case "SET_LOGIN_FIELD":
      return Object.assign({}, state, {
        ...state,
        fields: {
          ...state.fields,
          [action.fieldName]: action.newValue
        }
      });
    default:
      return state;
  }
};

export default appState;

const LOCAL_STORAGE_JWT_KEY = "housinghub_token";
function setJwtInLocalStorage(jwt) {
  localStorage.setItem(LOCAL_STORAGE_JWT_KEY, jwt);
}

export function getJwtFromLocalStorage() {
  return localStorage.getItem(LOCAL_STORAGE_JWT_KEY);
}

export function removeJwtFromLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
  delete axios.defaults.headers.common["Authorization"];
}
