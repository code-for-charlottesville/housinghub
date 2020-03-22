import server
import requests
from flask import send_file, request, jsonify


def getNavigator():
    """finds and returns a navigator in the DB"""
    return server.errOut(500, "not implemented")


def postNavigator():
    """adds a new navigator to the database and returns response"""
    return server.errOut(500, "not implemented")


def putNavigator():
    """updates a navigator in the DB and returns the updated object"""
    return server.errOut(500, "not implemented")


def deleteNavigator():
    """deletes a navigator in the DB and returns the deleted object"""
    return server.errOut(500, "not implemented")
