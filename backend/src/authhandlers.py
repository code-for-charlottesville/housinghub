import server
import requests
from flask import send_file, request, jsonify
# import jwt


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
    isValidCred = server.db.validate_login(u, p)
    if not isValidCred:
        return server.err_out(401, "incorrect username or password")
    # create a JWT token and return to front end
    future_time = datetime.utcnow() + timedelta(hours=5)
    # payload = jwt.encode({'exp': future_time}, 'secret')
    payload = "temp"
    return jsonify({'jwt': payload})


def logout():
    """logout existing user"""
    return server.err_out(500, "not implemented")


def get_login_status():
    """see if a user is currently logged in"""
    return server.err_out(500, "not implemented")
