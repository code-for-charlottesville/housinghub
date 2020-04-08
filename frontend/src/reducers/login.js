const initialState = {
	loading : true,
	error : "",
  isLoggedIn : false,
  jwt : "",
	fields : {
		email : "",
		password : "",
		rememberMe : false,		
	}
}

const appState = (state = initialState, action) => {
	
  switch (action.type) {
    case 'SET_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        isLoggedIn : true,
        error : "",
        loading : false,
        jwt : action.jwt,
      })
    case 'SET_LOGIN_FAILURE':
      return Object.assign({}, state, {
        ...state,
        isLoggedIn : false,
        loading : false,
        error : action.error,
      })
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