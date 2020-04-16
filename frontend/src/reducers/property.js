const initialState = {
  error: "",

  //Not included:
//prop_info.landlord_id = prop_data.get('landlord_id')
//prop_info.navigator_id = prop_data.get('navigator_id')
//prop_info.voucher_type_accepted = "ABC"
//prop_info.voucher_type_not_accepted = "BVF"

//prop_info.contact_method = "phone" --DONE
//prop_info.listing_date = "prop_data.get('listing_date')" --DONE
//prop_info.where_listed = "prop_data.get('where_listed')" --DONE
//prop_info.year_available = prop_data.get('year_available')
//prop_info.last_contacted_by = prop_data.get('last_contacted_by') --Don't need


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
    yearAvail: "", //
    monthsAvail: 0,
    whenListed: "", 
    whereListed: "",  
    contactMethod: "", 
    rentPerMonth: 0,
    appFee: 0,
    deposit: 0,
    lastMonthRent: false,
    //CSRAP: false,
    //HVC: false,
    //MSV: false,
    //voucher4: false,
    //voucher5: false,
    //vouchersAccepted: [],
    //vouchersRefused: []
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
