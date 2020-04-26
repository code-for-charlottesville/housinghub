const initialState = {
  loading: false,
  sidebarOpen : false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return Object.assign({}, state, {
        ...state,
        loading: action.loading,
      });
    case "SET_SIDEBAR_OPEN":
      return Object.assign({}, state, {
        ...state,
        sidebarOpen : action.sidebarOpen
      });
    default:
      return state;
  }
};

export default appState;
