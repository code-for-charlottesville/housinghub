import server
import requests
from flask import send_file, request, jsonify


def get_landlord(request, jwtPayload):
    """finds and returns a Landlord in the DB"""
    return ({}, 500, "not implemented")


def post_landlord(request, jwtPayload):
    """adds a new Landlord to the database and returns response"""
    return ({}, 500, "not implemented")


def put_landlord(request, jwtPayload):
    """updates a Landlord in the DB and returns the updated object"""
    return ({}, 500, "not implemented")


def delete_landlord(request, jwtPayload):
    """deletes a Landlord in the DB and returns the deleted object"""
    return ({}, 500, "not implemented")
