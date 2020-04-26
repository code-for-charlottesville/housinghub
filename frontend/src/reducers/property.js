const initialState = {
  error: "",
  addProperty: {
    fields: {
      landlord_id: "",
      navigator_id: "",
      property_name: "",
      address: "",
      unit_apt_no: "",
      floor: 0,
      zip_code: "",
      housing_type: "",
      bedrooms: 0,
      bathrooms: 0,
      shared_bathrooms: 0,
      has_basement: false,
      school_district: "",
      bus_line: false,
      wheelchair_accessibility: false,
      elevator: false,
      date_first_available: new Date().toISOString().slice(0, 10),
      year_available: new Date().getFullYear(),
      potential_month_available: 0,
      listing_date: new Date().toISOString().slice(0, 10),
      where_listed: "",
      contact_method: [],
      last_contact_date: new Date().toISOString().slice(0, 10),
      last_contacted_by: "",
      monthly_rent: 0,
      application_fee: 0,
      deposit: 0,
      last_month_rent_required: false,
      voucher_type_accepted: [],
      voucher_type_not_accepted: [],
      credit_screening_company: "",
      background_screening_company: "",
      allow_criminal_records: false,
      is_available: false,
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
