// redux utils
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import propertyState from "./property";
import appState from "./appState";
import login from "./login";
import user from "./user";
import search from "./search";

const reducer = combineReducers({
  appState,
  propertyState,
  login,
  user,
  search,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
