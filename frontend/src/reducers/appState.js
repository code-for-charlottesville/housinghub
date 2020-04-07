const initialState = {
	view : "login"
}

const appState = (state = initialState, action) => {
  switch (action.type) {
  	case action.type === "SET_VIEW":
  		return Object.assign({}, state, {
  		  view: action.view
  		})
  		break
    default:
      return state
  }
}

export default appState