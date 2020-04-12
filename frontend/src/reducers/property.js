
//TEMPLATE

// export default (state = {}, action) => {
//   switch (action.type) {
//     case "SIMPLE_ACTION":
//       return {
//         result: action.payload
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  error: "",
  fields: {
    id: "1",
    name: "",
    address: "",
    unitNum: "",
    floorNum: "",
    zipCode: "", //int or str?
    type: "",
    numBeds: 0, //int or str?
    //numBedsOther:
    numBaths: 0, //int or str?
    //numBathsOther
    numBathsShared: 0, //int or str?
    //numbBathsSharedOther:
    basement: false,
    schoolDist: "",
    busStop: false,
    wheelchairAcc: false,
    elevator: false,
    dateAvail: "", //Date?
    monthsAvail: 0, //int or str?
    rentPerMonth: 0, //int or str?
    appFee: 0, //int or str?
    deposit: 0, //int or str?
    lastMonthRent: false,
    CSRAP: false,
    HVC: false,
    MSV: false,
    voucher4: false,
    voucher5: false,
    creditCompany: "",
    backgroundCompany: "",
    cleanRecord: false,
    notes: ""
  }
};

const propertyState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWPROP_SUCCESS":
      return Object.assign({}, state, {
        ...state,
        id: action.id,
        error: ""
      });
    case "SET_NEWPROP_FAILURE":
      return Object.assign({}, state, {
        ...state,
        error: action.error
      });
    case "SET_PROPERTY_FIELD":
      console.log(`setting ${action.fieldName}`);
      return Object.assign({}, state, {
        ...state,
        fields: {
          ...state.fields,
          [action.fieldName]: action.newValue
        }
      });
    default:
      return state;
  }
};

export default propertyState;