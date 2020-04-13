
const initialState = {
  error: "",
  fields: {
    id: "",
    name: "",
    address: "",
    unitNum: "",
    floorNum: "",
    zipCode: "", 
    type: "",
    numBeds: 0, 
    numBaths: 0, 
    numBathsShared: 0,
    basement: false,
    schoolDist: "",
    busStop: false,
    wheelchairAcc: false,
    elevator: false,
    dateAvail: "", 
    monthsAvail: 0, 
    rentPerMonth: 0,
    appFee: 0, 
    deposit: 0, 
    lastMonthRent: false,
    CSRAP: false,
    HVC: false,
    MSV: false,
    voucher4: false,
    voucher5: false,
    creditCompany: "",
    backgroundCompany: "",
    cleanRecord: false,
    notes: "",
  },
};

const propertyState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWPROP_SUCCESS":
      return Object.assign({}, state, {
        ...state,
        id: action.id,
        error: "",
      });
    case "SET_NEWPROP_FAILURE":
      return Object.assign({}, state, {
        ...state,
        error: action.error,
      });
    case "SET_PROPERTY_FIELD":
      console.log(`setting ${action.fieldName}`); //
      return Object.assign({}, state, {
        ...state,
        fields: {
          ...state.fields,
          [action.fieldName]: action.newValue,
        },
      });
    default:
      return state;
  }
};

export default propertyState;
