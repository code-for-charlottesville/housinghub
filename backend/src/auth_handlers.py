import server
import requests
from flask import send_file, request, jsonify
from datetime import datetime, timezone, timedelta
from jwt import encode, decode, ExpiredSignatureError, exceptions as jwtExceptions


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


def get_login_status():
    """see if a user is currently logged in"""
    (payload, err) = validateIncomingRequest(request)
    if err is not None:
        return server.err_out(401, err)
    return jsonify(payload)


def validateIncomingRequest(request):
    """
        extracts jwt token from flask request object, then decodes JWT
        returns (jwt(string), err(string))
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
        takes in jwt (string)
        returns (payload(dict), error(string))
    """
    t = None
    err = None
    print()
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
        takes user class.User as argument
        returns encoded jwt as string
    """
    futureTime = datetime.now(
        timezone.utc) + timedelta(seconds=server.tokenExpSeconds)
    rawBytes = encode(
        {
            'exp': futureTime,
            'uid': user.uid,
            "name": "{} {}".format(user.first_name, user.last_name)
        },
        server.tokenSecret,
        algorithm=server.tokenEncryptAlg)
    return str(rawBytes, 'utf-8')
