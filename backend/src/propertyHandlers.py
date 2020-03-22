import server
import requests
from flask import send_file, request, jsonify


def getProperty():
    """finds and returns a Property in the DB"""
    return server.errOut(500, "not implemented")


def postProperty():
    """adds a new Property to the database and returns response"""
    return server.errOut(500, "not implemented")


def putProperty():
    """updates a Property in the DB and returns the updated object"""
    return server.errOut(500, "not implemented")


def deleteProperty():
    """deletes a Property in the DB and returns the deleted object"""
    return server.errOut(500, "not implemented")
