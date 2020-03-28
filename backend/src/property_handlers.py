import server
import requests
from flask import send_file, request, jsonify


def get_property(jwtPayload):
    """finds and returns a Property in the DB"""
    print("GOT HERE")
    return server.err_out(500, "not implemented")


def post_property(jwtPayload):
    """adds a new Property to the database and returns response"""
    return server.err_out(500, "not implemented")


def put_property(jwtPayload):
    """updates a Property in the DB and returns the updated object"""
    return server.err_out(500, "not implemented")


def delete_property(jwtPayload):
    """deletes a Property in the DB and returns the deleted object"""
    return server.err_out(500, "not implemented")
