import { postProperty } from "../api/property";
import { setLoading } from "./appState";
import store from "../reducers/index";

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

export function setAddPropertyField(fieldName, newValue) {
  return {
    type: "SET_ADD_PROPERTY_FIELD",
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
  postProperty(store.getState().propertyState.addProperty.fields).then((response) => {
    store.dispatch(setLoading(false));
    if (response && response.id) {
      store.dispatch(setNewPropSuccess(response.id));
    } else {
      store.dispatch(setNewPropFailure(response.error));
    }
  });
}
