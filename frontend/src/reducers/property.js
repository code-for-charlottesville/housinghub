const initialState = {
  error: "",
  fields: {
    id: "",
    landlordId: "",
    navigatorId: "",
    name: "",
    address: "",
    unitNum: "",
    floorNum: 0,
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
    dateAvail: new Date(),
    yearAvail: new Date().getFullYear(),
    monthsAvail: 0,
    whenListed: new Date(),
    whereListed: "",
    contactMethods: [],
    lastContacted: new Date(),
    lastContactedBy: "",
    rentPerMonth: 0,
    appFee: 0,
    deposit: 0,
    lastMonthRent: false,
    acceptedVouchers: [],
    refusedVouchers: ["MSV", "HCV", "CSRAP", "Voucher 4", "Voucher 5"],
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
