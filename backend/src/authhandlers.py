import server
import requests
from flask import send_file, request, jsonify


def register_new_user():
    """registers a new user in the DB"""
    return server.err_out(500, "not implemented")

def login():
    """login an existing user"""
    return server.err_out(500, "not implemented")

def logout():
    """logout existing user"""
    return server.err_out(500, "not implemented")

def get_login_status():
    """see if a user is currently logged in"""
    return server.err_out(500, "not implemented")
