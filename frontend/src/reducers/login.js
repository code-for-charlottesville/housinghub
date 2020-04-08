const initialState = {
	loading : true,
	error : "",
	fields : {
		email : "",
		password : "",
		rememberMe : false,		
	}
}

const appState = (state = initialState, action) => {
	
  switch (action.type) {
  	case 'SET_LOGIN_FIELD':
  		return Object.assign({}, state, {
  			...state,
  			fields : {
  				...state.fields,
  				[action.fieldName] : action.newValue
  			}
  		})
    default:
      return state
  }
}

export default appState