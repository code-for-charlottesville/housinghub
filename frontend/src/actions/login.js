export function setLoginField(fieldName,newValue) {
  return {
    type: "SET_LOGIN_FIELD",
    fieldName,
    newValue
  }
}