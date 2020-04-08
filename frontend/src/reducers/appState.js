const initialState = {
	view : "login"
}

const appState = (state = initialState, action) => {
  switch (action.type) {
  	case "SET_VIEW":
  		return Object.assign({}, state, {
  		  view: action.view
  		})
    default:
      return state
  }
}

export default appState