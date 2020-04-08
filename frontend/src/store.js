import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/index';
import logger from 'redux-logger'

export default function configureStore() {
 return createStore(
  reducer,
   applyMiddleware(thunk, logger),
 );
}