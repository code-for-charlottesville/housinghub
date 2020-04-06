import server
import requests
from flask import send_file, request, jsonify
from datetime import datetime, timezone, timedelta
from jwt import encode, decode, ExpiredSignatureError, exceptions as jwtExceptions
import logging
from models import User


def register_new_user():
    """registers a new user in the DB, returns JWT Token
    :return: flask response object
    """
    # get user info from front end
    try:
        user_data = request.get_json()  #dictionary of input
        userd = User(user_data)
    except KeyError as err:
        return server.err_out(401, "'{}' is a required field".format(str(err)))

    # check if user already exists
    if server.db.user_name_already_exists(userd.user_name):
        return server.err_out(
            409, "user_name {} already exists".format(userd.user_name))
    # create new entry in the database
    err = server.db.add(userd)
    if err is not None:
        return server.err_out(
            500, "Could not add user to the database: {}".format(err))

    return jsonify({
        "user": userd.get_info(),
        "jwt": encodeJWT(userd),
    })


def rotateServerKeyIfNeeded():
    """
    rotates the server key if the expiration has passed
    """
    if server.tokenFutureRotationDate < datetime.now(timezone.utc):
        logging.debug(
            "rotating key, at least {} has passed since last rotation".format(
                server.tokenRotationIntervalSec))
        "{}-{}".format(secrets.token_hex(64), time.time())
        server.tokenFutureRotationDate = datetime.now(
            timezone.utc) + timedelta(seconds=server.tokenRotationIntervalSec)


def login():
    """login an existing user
    :return: flask response object
    """
    rotateServerKeyIfNeeded()
    # get user and password from front end
    u = request.get_json().get("user_name")
    p = request.get_json().get("password")
    # validate that user and password is valid
    (user, err) = server.db.validate_login(u, p)
    if err is not None:
        return server.err_out(401, err)
    # create a JWT token and return to front end
    return jsonify({'jwt': encodeJWT(user)})


def get_login_status():
    """see if a user is currently logged in
    :return: flask response object
    """
    (payload, err) = validateIncomingRequest(request)
    if err is not None:
        return server.err_out(401, err)
    return jsonify(payload)


def validateIncomingRequest(request):
    """extracts jwt token from flask request object, then decodes JWT
    :param request: flask request object
    :return: tuple (jwt(string), err(string))
    """
    auth_header = request.headers.get('Authorization')
    if auth_header is None:
        return (None, "Authorization header not found in request")
    # get bearer
    spl = auth_header.split(" ")
    if len(spl) != 2:
        return (
            None,
            "Token header must be in form: 'Authorization: Bearer $JWT_TOKEN but was: '{}'"
            .format(auth_header))
    return decodeJWT(spl[1])


def decodeJWT(jwt):
    """decodes jwt
    :param jwt: string, utf-8 representation of jwt
    :return: tuple of (payload(dict), error(string))
    """
    t = None
    err = None
    try:
        t = decode(jwt,
                   server.tokenSecret,
                   algorithms=[server.tokenEncryptAlg])
    except ExpiredSignatureError:
        err = "token has expired"
    except jwtExceptions.DecodeError:
        err = "token is invalid"
    return (t, err)


def encodeJWT(user):
    """encodes JWT
    :param user: string takes user class.User as argument
    :return: encoded jwt as string
    """
    futureTime = datetime.now(
        timezone.utc) + timedelta(seconds=server.tokenExpSeconds)
    rawBytes = encode(
        {
            'exp': futureTime,
            'uuid': user.id,
            'user_name': user.user_name,
            'role': user.role,
            'role_id': user.role_id,
        },
        server.tokenSecret,
        algorithm=server.tokenEncryptAlg)
    return str(rawBytes, 'utf-8')
