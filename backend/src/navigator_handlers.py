import server
import requests
from flask import send_file, request, jsonify


def get_navigator(request, jwtPayload):
    """finds and returns a navigator in the DB
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return ({}, 500, "not implemented")


def post_navigator(request, jwtPayload):
    """adds a new navigator to the database and returns response
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    return ({}, 500, "not implemented")


def put_navigator(request, jwtPayload):
    """updates a navigator in the DB and returns the updated object
	:param request: flask request object
	:param request: dictionary of jwtPayload
	:return tuple (response body (dict), response code (int), error (string))
    """
    return ({}, 500, "not implemented")


def delete_navigator(request, jwtPayload):
    """deletes a navigator in the DB and returns the deleted object
	:param request: flask request object
	:param request: dictionary of jwtPayload
	:return tuple (response body (dict), response code (int), error (string))
    """
    return ({}, 500, "not implemented")
