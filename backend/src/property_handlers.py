from flask import request, jsonify, Blueprint
from app.auth import authenticate

import uuid
import traceback

import app
from app.spec import DocumentedBlueprint
from app.api import AddPropertyRequest, PropertyResponse
from marshmallow import ValidationError

property_module = DocumentedBlueprint('property', __name__)


@property_module.route('/property', methods=['GET'])
@authenticate
def get_property():
    """finds and returns a Property in the DB
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@property_module.route('/property', methods=['POST'])
@authenticate
def post_property():
    """adds a new Property to the database and returns response
    ---
    post:
        tags: 
            - authentication    
        summary: Creates a new user
        requestBody:
            required: true
            content:
                application/json:
                    schema: AddPropertyRequest
        responses:
            '200':
                description: Auth token for newly created user
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
        payload = AddPropertyRequest().load(request.get_json())
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
    return jsonify(code=500, error='not implemented'), 500


@property_module.route('/property', methods=['DELETE'])
@authenticate
def delete_property():
    """deletes a Property in the DB and returns the deleted object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500
