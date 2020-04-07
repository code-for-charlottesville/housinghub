import { combineReducers } from 'redux';
import property from './property';
import appState from './appState'
export default combineReducers({
 appState,
 property,
});