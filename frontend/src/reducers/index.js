import { combineReducers } from 'redux';
import property from './property';
import appState from './appState'
import login from './login'
export default combineReducers({
 appState,
 property,
 login
});