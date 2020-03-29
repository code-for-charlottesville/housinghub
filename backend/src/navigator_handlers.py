import server
import requests
from flask import send_file, request, jsonify


def get_navigator(request, jwtPayload):
    """finds and returns a navigator in the DB"""
    return ({}, 500, "not implemented")


def post_navigator(request, jwtPayload):
    """adds a new navigator to the database and returns response"""
    return ({}, 500, "not implemented")


def put_navigator(request, jwtPayload):
    """updates a navigator in the DB and returns the updated object"""
    return ({}, 500, "not implemented")


def delete_navigator(request, jwtPayload):
    """deletes a navigator in the DB and returns the deleted object"""
    return ({}, 500, "not implemented")
