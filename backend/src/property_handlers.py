import traceback

from flask import Blueprint, jsonify, request
from marshmallow import ValidationError, pprint
import json
import app
from app.api import AddPropertyRequest, PropertyResponse, GetPropertyRequest, GetPropertyResponse, PaginationResponse, PropertySchema, UpdatePropertyRequest, UpdatePropertyResponse, DeletePropertyResponse
from app.auth import authenticate
from app.spec import DocumentedBlueprint

property_module = DocumentedBlueprint('property', __name__)


@property_module.route('/property/search', methods=['POST'])
@authenticate
def get_property():
    """Gets a list of properties that match the search criteria
    ---
    post:
        tags:
            - authentication
        summary: Gets a list of properties that match the search criteria
        requestBody:
            required: true
            content:
                application/json:
                    schema: GetPropertyRequest
        responses:
            '200':
                description: list of matched properties
                content:
                    application/json:
                        schema: GetPropertyResponse
            '400':
                description: Request is invalid
                content:
                    application/json:
                        schema: ErrorResponse
            '500':
                description: An error message.
                content:
                    application/json:
                        schema: ErrorResponse
    """
    try:
        payload = GetPropertyRequest().load(request.get_json())
        _property = app.services.property_service().get_property(payload)
        _property_response = GetPropertyResponse()
        _property_response.pagination = PaginationResponse()
        _property_response.pagination = PaginationResponse(partial=True).load(
        {
            "results_per_page": len(_property),
            "page": 1,
            "totalNumberOfResults": len(_property)
        }
    )
        _property_response.results = _property
        return jsonify(GetPropertyResponse().dump(_property_response))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error getting property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500

    return jsonify(code=500, error='not implemented'), 500



@property_module.route('/property', methods=['POST'])
@authenticate
def post_property():
    """adds a new Property to the database and returns response
    ---
    post:
        tags: 
            - authentication    
        summary: Creates a new property
        requestBody:
            required: true
            content:
                application/json:
                    schema: AddPropertyRequest
        responses:
            '200':
                description: newly created property
                content:
                    application/json:
                        schema: PropertyResponse
            '400':
                description: Request is invalid
                content:
                    application/json:
                        schema: ErrorResponse
            '500':
                description: An error message.
                content:
                    application/json:
                        schema: ErrorResponse
    """
    try:
        payload = AddPropertyRequest().load(request.get_json(), transient=True)
        _property = app.services.property_service().add_property(payload)
        return jsonify(PropertyResponse().dump(_property))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500


@property_module.route('/property', methods=['PUT'])
@authenticate
def put_property():
    """updates a Property in the DB and returns the updated object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        payload = request.get_json()
        new_property = app.services.property_service().update_property(payload)
        return jsonify(UpdatePropertyResponse().dump(new_property))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500
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
        payload = request.get_json()
        deleted_property = app.services.property_service().delete_property(payload)
        return jsonify(DeletePropertyResponse().dump(deleted_property))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='not implemented'), 500
