import server
import requests
from flask import send_file, request, jsonify
from datetime import datetime, timezone, timedelta
import jwt


def register_new_user():
    """registers a new user in the DB, returns JWT Token"""
    # get user and password from front end

    # create new entry in the database

    # TODO: confirm somehow??

    # create a JWT token and return to the front end

    return server.err_out(500, "not implemented")


def login():
    """login an existing user"""
    # get user and password from front end
    u = request.get_json().get("username")
    p = request.get_json().get("password")
    # validate that user and password is valid
    (user, err) = server.db.validate_login(u, p)
    if err is not None:
        return server.err_out(401, err)
    # create a JWT token and return to front end
    return jsonify({'jwt': encodeJWT(user)})


def logout():
    """logout existing user"""
    return server.err_out(500, "not implemented")


def get_login_status():
    """see if a user is currently logged in"""
    return server.err_out(500, "not implemented")


def encodeJWT(user):
    """encodes JWT
        takes user class.User as argument
        returns encoded jwt as string
    """
    futureTime = datetime.now(
        timezone.utc) + timedelta(seconds=server.tokenExpSeconds)
    rawBytes = jwt.encode(
        {
            'exp': futureTime,
            'uid': user.uid,
            "name": "{} {}".format(user.first_name, user.last_name)
        },
        server.tokenSecret,
        algorithm='HS256')
    return str(rawBytes, 'utf-8')
