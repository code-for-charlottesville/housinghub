const initialState = {
  error: "",
  addProperty: {
    fields: {
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
      voucherTypeNotAccepted: [],
      creditScreeningCompany: "",
      backgroundScreeningCompany: "",
      allowCriminalRecords: false,
      notes: "",
    },
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
    case "SET_ADD_PROPERTY_FIELD":
      if (Array.isArray(state.addProperty.fields[action.fieldName])) {
        let index = state.addProperty.fields[action.fieldName].indexOf(
          action.newValue
        );
        if (index > -1) {
          return Object.assign({}, state, {
            ...state,
            addProperty: {
              fields: {
                ...state.addProperty.fields,
                [action.fieldName]: state.addProperty.fields[
                  action.fieldName
                ].filter((item) => item !== action.newValue),
              },
            },
          });
        } else {
          return Object.assign({}, state, {
            ...state,
            addProperty: {
              fields: {
                ...state.addProperty.fields,
                [action.fieldName]: [
                  ...state.addProperty.fields[action.fieldName],
                  action.newValue,
                ],
              },
            },
          });
        }
      } else {
        return Object.assign({}, state, {
          ...state,
          addProperty: {
            fields: {
              ...state.addProperty.fields,
              [action.fieldName]: action.newValue,
            },
          },
        });
      }
    default:
      return state;
  }
};

export default propertyState;
