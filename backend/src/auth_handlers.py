import server
import requests
from flask import send_file, request, jsonify, Blueprint, g
from datetime import datetime, timezone, timedelta
from jwt import encode, decode, ExpiredSignatureError, exceptions as jwtExceptions
import logging
from user import User
from app.decorators import authenticate


import app

auth_module = Blueprint('auth',__name__,url_prefix='/auth')

@auth_module.route('/register', methods=['POST'])
def register():
    """registers a new user in the DB, returns JWT Token
    :return: flask response object
    """
    # get user info from front end
    try:
        user_data = request.get_json() #dictionary of input
        username = user_data.get('user_name')
        password = user_data.get('password')
        role = user_data.get('role')
        is_admin = bool(user_data.get('is_admin'))
        created_user = app.services.user_service().add_user(username,password,role,is_admin)
    except KeyError as err:
        return jsonify(code=400, error='Request is invalid'), 400
    # create new entry in the database

    # TODO: confirm somehow??

    # create a JWT token and return to the front end

    return jsonify({'jwt': app.services.auth_service().encode_jwt(created_user)})

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
    else:
        return jsonify(code=401,error='Login invalid'), 401

@authenticate
@auth_module.route('/status',methods=['GET'])
def get_login_status():
    """see if a user is currently logged in
    :return: flask response object
    """
    return jsonify(g.user)


