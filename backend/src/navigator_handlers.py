from flask import Blueprint, jsonify, request

import app
from app.auth import authenticate

navigator_module = Blueprint('navigator', __name__)


@navigator_module.route('/navigator', methods=['GET'])
@authenticate
def get_navigator():
    """finds and returns a navigator in the DB
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@navigator_module.route('/navigator', methods=['POST'])
@authenticate
def post_navigator():
    """adds a new navigator to the database and returns response
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@navigator_module.route('/navigator', methods=['PUT'])
@authenticate
def put_navigator():
    """updates a navigator in the DB and returns the updated object
	:param request: flask request object
	:param request: dictionary of jwtPayload
	:return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500


@navigator_module.route('/navigator', methods=['DELETE'])
@authenticate
def delete_navigator():
    """deletes a navigator in the DB and returns the deleted object
	:param request: flask request object
	:param request: dictionary of jwtPayload
	:return tuple (response body (dict), response code (int), error (string))
    """
    return jsonify(code=500, error='not implemented'), 500
