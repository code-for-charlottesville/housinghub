const initialState = {
  loading: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return Object.assign({}, state, {
        ...state,
        loading: action.loading,
      });
    default:
      return state;
  }
};

export default appState;
