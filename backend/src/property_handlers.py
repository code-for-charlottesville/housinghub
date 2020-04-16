from flask import request, jsonify, Blueprint
from app.auth import authenticate
import json
import app

from models.property import Property

property_module = Blueprint('property', __name__)


@property_module.route('/property', methods=['GET'])
@authenticate
def get_property():
    """finds and returns a Property in the DB
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        property_list = app.services.property_service().get_all_property()
        if property_list:
            return jsonify(property_list), 200
        else:
            return jsonify(code=400, error='error processing request'), 400
    except:
        jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='internal error'), 500


def extract_property_info(prop_data):
    prop_info = Property()
    prop_info.id = prop_data.get('id')
    prop_info.landlord_id = prop_data.get('landlord_id')
    prop_info.navigator_id = prop_data.get('navigator_id')
    prop_info.voucher_type_accepted = prop_data.get('voucher_type_accepted')
    prop_info.voucher_type_not_accepted = prop_data.get('voucher_type_not_accepted')
    prop_info.address = prop_data.get('address')
    prop_info.zip_code = prop_data.get('zip_code')
    prop_info.unit_apt_no = prop_data.get('unit_apt_no')
    prop_info.property_name = prop_data.get('property_name')
    prop_info.bus_line = prop_data.get('bus_line')
    prop_info.school_district = prop_data.get('school_district')
    prop_info.wheelchair_accessibility = prop_data.get('wheelchair_accessibility')
    prop_info.elevator = prop_data.get('elevator')
    prop_info.monthly_rent = prop_data.get('monthly_rent')
    prop_info.contact_method = prop_data.get('contact_method')
    prop_info.is_available = prop_data.get('is_available')
    prop_info.date_first_available = prop_data.get('date_first_available')
    prop_info.last_contact_date = prop_data.get('last_contact_date')
    prop_info.potential_month_available = prop_data.get('potential_month_available')
    prop_info.bedrooms = prop_data.get('bedrooms')
    prop_info.bathrooms = prop_data.get('bathrooms')
    prop_info.shared_bathrooms = prop_data.get('shared_bathrooms')
    prop_info.has_basement = prop_data.get('has_basement')
    prop_info.application_fee = prop_data.get('application_fee')
    prop_info.deposit = prop_data.get('deposit')
    prop_info.last_month_rent_required = prop_data.get('last_month_rent_required')
    prop_info.allow_criminal_records = prop_data.get('allow_criminal_records')
    prop_info.listing_date = prop_data.get('listing_date')
    prop_info.where_listed = prop_data.get('where_listed')
    prop_info.floor = prop_data.get('floor')
    prop_info.housing_type = prop_data.get('housing_type')
    prop_info.year_available = prop_data.get('year_available')
    prop_info.credit_screening_company = prop_data.get('credit_screening_company')
    prop_info.background_screening_company = prop_data.get('background_screening_company')
    prop_info.last_contacted_by = prop_data.get('last_contacted_by')
    return prop_info


@property_module.route('/property', methods=['POST'])
@authenticate
def post_property():
    """adds a new Property to the database and returns response
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        prop_data = request.get_json()  # dictionary of input
        app.logger.error('Paylod is ' + str(prop_data))
        print(str(str(prop_data)))

        prop_info = extract_property_info(prop_data)
        if prop_info:
            created_prop = app.services.property_service().add_property(prop_info)
            return jsonify(created_prop), 200
        else:
            app.logger.error('Invalid property registration payload')
            return jsonify(code=400, error='Request is invalid'), 400
    except:
        app.logger.error('Unexpected error registering new property')
        return jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='internal error'), 500


@property_module.route('/property', methods=['PUT'])
@authenticate
def put_property():
    """updates a Property in the DB and returns the updated object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@property_module.route('/property', methods=['DELETE'])
@authenticate
def delete_property():
    """deletes a Property in the DB and returns the deleted object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        property_id = request.get_json().get("id")
        if property_id:
            deleted_prop = app.services.property_service().delete_property(property_id)
            return jsonify(code=200, message="Property " + str(deleted_prop) + " deleted."), 200
        else:
            return jsonify(code=400, error='error processing request'), 400
    except:
        jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='internal error'), 500
