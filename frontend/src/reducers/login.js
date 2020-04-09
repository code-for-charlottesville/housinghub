const initialState = {
  error: "",
  isLoggedIn: false,
  fields: {
    email: "",
    password: "",
    rememberMe: false
  }
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_SUCCESS":
      setJwtInLocalStorage(action.jwt);
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: true,
        error: ""
      });
    case "SET_LOGIN_FAILURE":
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
