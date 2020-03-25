import server
import requests
from flask import send_file, request, jsonify


def get_navigator():
    """finds and returns a navigator in the DB"""
    return server.err_out(500, "not implemented")


def post_navigator():
    """adds a new navigator to the database and returns response"""
    print request.get_json()
    return server.err_out(500, "not implemented")


def put_navigator():
    """updates a navigator in the DB and returns the updated object"""
    return server.err_out(500, "not implemented")


def delete_navigator():
    """deletes a navigator in the DB and returns the deleted object"""
    return server.err_out(500, "not implemented")
