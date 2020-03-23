import server
import requests
from flask import send_file, request, jsonify


def get_landlord():
    """finds and returns a Landlord in the DB"""
    return server.err_out(500, "not implemented")


def post_landlord():
    """adds a new Landlord to the database and returns response"""
    return server.err_out(500, "not implemented")


def put_landlord():
    """updates a Landlord in the DB and returns the updated object"""
    return server.err_out(500, "not implemented")


def delete_landlord():
    """deletes a Landlord in the DB and returns the deleted object"""
    return server.err_out(500, "not implemented")
