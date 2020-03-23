import server
import requests
from flask import send_file, request, jsonify


def getLandlord():
    """finds and returns a Landlord in the DB"""
    return server.errOut(500, "not implemented")


def postLandlord():
    """adds a new Landlord to the database and returns response"""
    return server.errOut(500, "not implemented")


def putLandlord():
    """updates a Landlord in the DB and returns the updated object"""
    return server.errOut(500, "not implemented")


def deleteLandlord():
    """deletes a Landlord in the DB and returns the deleted object"""
    return server.errOut(500, "not implemented")
