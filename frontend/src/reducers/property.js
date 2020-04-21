const initialState = {
  error: "",
  fields: {
    id: "",
    landlordId: "",
    navigatorId: "",
    propertyName: "",
    address: "",
    unitAptNum: "",
    floor: 0,
    zipCode: "",
    housingType: "",
    bedrooms: 0,
    bathrooms: 0,
    sharedBathrooms: 0,
    hasBasement: false,
    schoolDistrict: "",
    busLine: false,
    wheelchairAccessibility: false,
    elevator: false,
    dateFirstAvailable: new Date().toString(),
    yearAvailable: new Date().getFullYear(),
    potentialMonthAvailable: 0,
    listingDate: new Date().toString(),
    whereListed: "",
    contactMethod: [],
    lastContactDate: new Date().toString(),
    lastContactedBy: "",
    monthlyRent: 0,
    applicationFee: 0,
    deposit: 0,
    lastMonthRentRequired: false,
    voucherTypeAccepted: [],
    voucherTypeNotAccepted: ["MSV", "HCV", "CSRAP", "Voucher 4", "Voucher 5"],
    creditScreeningCompany: "",
    backgroundScreeningCompany: "",
    allowCriminalRecords: false,
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
    case "SET_ARRAY_VALUES":
      let index = state.fields[action.arrayName].indexOf(action.item);
      if (index > -1) {
        return Object.assign({}, state, {
          ...state,
          fields: {
            ...state.fields,
            [action.arrayName]: state.fields[action.arrayName].filter(
              (item) => item !== action.item
            ),
          },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          fields: {
            ...state.fields,
            [action.arrayName]: [
              ...state.fields[action.arrayName],
              action.item,
            ],
          },
        });
      }
    default:
      return state;
  }
};

export default propertyState;
