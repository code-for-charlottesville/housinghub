import requests
from flask import request, jsonify, Blueprint

import app

auth_module = Blueprint('auth', __name__, url_prefix='/auth')


@auth_module.route('/register', methods=['POST'])
def register():
    """registers a new user in the DB, returns JWT Token
    :return: flask response object
    """
    # get user info from front end
    try:
        user_data = request.get_json()  #dictionary of input
        app.logger.error('Paylod is ' + str(user_data))
        username = user_data.get('user_name')
        password = user_data.get('password')
        role = user_data.get('role')
        is_admin = bool(user_data.get('is_admin'))
        if username and password and role:
            created_user = app.services.user_service().add_user(
                username, password, role, is_admin)
            return jsonify(
                {'jwt': app.services.auth_service().encode_jwt(created_user)})
        else:
            app.logger.error('Invalid user registration payload')
            return jsonify(code=400, error='Request is invalid'), 400
    except:
        app.logger.error('Unexpected error registering new user')
        return jsonify(code=500, error='internal error'), 500


@auth_module.route('/login', methods=['POST'])
def login():
    """login an existing user
    :return: flask response object
    """
    # get user and password from front end
    u = request.get_json().get("username")
    p = request.get_json().get("password")
    # validate that user and password is valid
    user = app.services.auth_service().validate_login(u, p)
    if user:
        # create a JWT token and return to front end
        return jsonify({'jwt': app.services.auth_service().encode_jwt(user)})
    return jsonify(code=401, error='Login invalid'), 401


@auth_module.route('/status', methods=['GET'])
def get_login_status():
    """see if a user is currently logged in
    :return: flask response object
    """
    auth_service = app.services.auth_service()
    (user, err) = auth_service.authenticate_request(request)
    if user:
        return jsonify(user), 200
    return jsonify(code=401, error='Not logged in'), 401
