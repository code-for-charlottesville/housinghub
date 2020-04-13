const initialState = {
  exp: -1,
  role: "",
  uid: ""
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, {
        ...state,
        ...action.user
      });
    default:
      return state;
  }
};

export default appState;
