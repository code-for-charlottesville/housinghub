import axios from "axios";

/**
 * makes POST request to /backend/property with id
 **/

export function postProperty(fields) {
  return axios
    .post("/backend/property", {
    address: fields.address,
    allow_criminal_records: fields.allow_criminal_records,
    application_fee: fields.application_fee,
    background_screening_company: fields.background_screening_company,
    bedrooms: fields.bedrooms,
    bathrooms: fields.bathrooms,
    bus_line: fields.bus_line,
    contact_method: fields.contact_method,
    credit_screening_company: fields.credit_screening_company,
    date_first_available: fields.date_first_available,
    deposit: fields.deposit,
    elevator: fields.elevator,
    floor: fields.floor,
    has_basement: fields.has_basement,
    housing_type: fields.housing_type,
    landlord_id: fields.landlord_id,
    last_contact_date: fields.last_contact_date,
    last_contacted_by: fields.last_contacted_by,
    last_month_rent_required: fields.last_month_rent_required,
    listing_date: fields.listing_date,
    monthly_rent: fields.monthly_rent,
    navigator_id: fields.navigator_id,
    potential_month_available: fields.potential_month_available,
    property_name: fields.property_name,
    school_district: fields.school_district,
    shared_bathrooms: fields.shared_bathrooms,
    unit_apt_no: fields.unit_apt_no,
    voucher_type_accepted: fields.voucher_type_accepted,
    voucher_type_not_accepted: fields.voucher_type_not_accepted,
    wheelchair_accessibility: fields.wheelchair_accessibility,
    where_listed: fields.where_listed,
    year_available: fields.year_available,
    zip_code: fields.zip_code,
    })
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      console.error(err.response);
      return Promise.resolve(err.response.data);
    });
}
