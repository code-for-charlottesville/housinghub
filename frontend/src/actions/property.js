import { postProperty } from "../api/property";
import { setLoading } from "./appState";
import store from "../reducers/index";

//TEMPLATE

// export const simpleAction = () => dispatch => {
//   dispatch({
//     type: "SIMPLE_ACTION",
//     payload: "result_of_simple_action"
//   });
// };

export function setNewPropSuccess(id) {
  return {
    type: "SET_NEWPROP_SUCCESS",
    id,
  };
}

export function setNewPropFailure(error) {
  return {
    type: "SET_NEWPROP_FAILURE",
    error,
  };
}

export function setPropertyField(fieldName, newValue) {
  console.log(fieldName);
  return {
    type: "SET_PROPERTY_FIELD",
    fieldName,
    newValue,
  };
}

/**
 * fires when user attempts to POST new property
 **/
export function addProperty() {
  store.dispatch(setLoading(true));
  // Make API call to backend /property
  postProperty(store.getState().propertyState.fields).then((response) => {
    store.dispatch(setLoading(false));
    if (response && response.id) {
      store.dispatch(setNewPropSuccess(response.id));
    } else {
      store.dispatch(setNewPropFailure(response.error));
    }
  });
}
