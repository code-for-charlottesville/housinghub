from flask import request, jsonify, Blueprint
from app.auth import authenticate

import app

landlord_module = Blueprint('landlord', __name__)


@landlord_module.route('/landlord', methods=['GET'])
@authenticate
def get_landlord():
    """finds and returns a Landlord in the DB
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@landlord_module.route('/landlord', methods=['POST'])
@authenticate
def post_landlord():
    """adds a new Landlord to the database and returns response
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@landlord_module.route('/landlord', methods=['PUT'])
@authenticate
def put_landlord():
    """updates a Landlord in the DB and returns the updated object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@landlord_module.route('/landlord', methods=['DELETE'])
@authenticate
def delete_landlord():
    """deletes a Landlord in the DB and returns the deleted object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500
