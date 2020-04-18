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

export function setPropertyField(fieldName, newValue) {
  return {
    type: "SET_PROPERTY_FIELD",
    fieldName,
    newValue,
  };
}

export function setArrayValues(arrayName, item) {
  let newArray = store.getState().propertyState.fields[arrayName];
  let index = newArray.indexOf(item);
    if (index > -1) {
        newArray.splice(index, 1);
    } else {
      newArray.push(item);
    }
    store.dispatch(setPropertyField(arrayName, newArray));
}

export function processDates(dateAvail, lastContacted, whenListed) {
  //if user inputs date, input is typeof(string) || if browser doesn't support HTML Date input (Safari, IE11)
  //convert back to Date objects
  if (typeof(dateAvail) === "string") {
    store.dispatch(setPropertyField("dateAvail", new Date(dateAvail)))
    //set year
    store.dispatch(setPropertyField("yearAvail", store.getState().propertyState.fields.dateAvail.getFullYear()))
  }
  if (typeof(lastContacted) == "string")
    store.dispatch(setPropertyField("lastContacted", new Date(lastContacted)))
  if (typeof(whenListed) === "string")
    store.dispatch(setPropertyField("whenListed", new Date(whenListed)))
}

/**
 * fires when user attempts to POST new property
 **/
export function addProperty() {
  console.log(store.getState().propertyState.fields);
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
