from flask import Flask, request, jsonify, send_file, redirect, Response
from flask_restful import Resource, Api
import requests
import db
import navigator_handlers
import landlord_handlers
import property_handlers
import auth_handlers as auth
import os
import logging

app = Flask(__name__)
app.config.from_pyfile('../config.cfg')
# db setup
db = db.DB(os.environ['DB_ENDPOINT'])

# global config
tokenSecret = os.environ['TOKEN_SECRET']
tokenExpSeconds = 10800
tokenEncryptAlg = 'HS256'
try:
    tokenExpSeconds = int(os.environ['TOKEN_EXP_SECONDS'])
except KeyError:
    logging.debug(
        "TOKEN_EXP_SECONDS not set in environment, defaulting to {} seconds".
        format(tokenExpSeconds))

##########
## util ##
##########


def serve_docs():
    """Serves docs to browser"""
    return send_file("../api/index.html")


def err_out(code, error):
    """util function for returning non 2xx responses"""
    logging.error(error)
    return jsonify(code=code, error=error), code


#########
## api ##
#########

supportedCrudEndpoints = [{
    "name":
    "navigator",
    "path":
    "/navigator",
    "methods": [{
        "method": "GET",
        "handler": navigator_handlers.get_navigator
    }, {
        "method": "POST",
        "handler": navigator_handlers.post_navigator
    }, {
        "method": "PUT",
        "handler": navigator_handlers.put_navigator
    }, {
        "method": "DELETE",
        "handler": navigator_handlers.delete_navigator
    }]
}, {
    "name":
    "landlord",
    "path":
    "/landlord",
    "methods": [{
        "method": "GET",
        "handler": landlord_handlers.get_landlord
    }, {
        "method": "POST",
        "handler": landlord_handlers.post_landlord
    }, {
        "method": "PUT",
        "handler": landlord_handlers.put_landlord
    }, {
        "method": "DELETE",
        "handler": landlord_handlers.delete_landlord
    }]
}, {
    "name":
    "property",
    "path":
    "/property",
    "methods": [{
        "method": "GET",
        "handler": property_handlers.get_property
    }, {
        "method": "POST",
        "handler": property_handlers.post_property
    }, {
        "method": "PUT",
        "handler": property_handlers.put_property
    }, {
        "method": "DELETE",
        "handler": property_handlers.delete_property
    }]
}, {
    "name":
    "register a new user",
    "path":
    "/auth/register",
    "methods": [{
        "method": "POST",
        "handler": auth.register_new_user
    }]
}, {
    "name":
    "login an existing user",
    "path":
    "/auth/login",
    "methods": [{
        "method": "POST",
        "handler": auth.login
    }]
}, {
    "name":
    "get the status of a user",
    "path":
    "/auth/status",
    "methods": [{
        "method": "GET",
        "handler": auth.get_login_status
    }]
}]

for endpt in supportedCrudEndpoints:
    for m in endpt.get("methods"):
        app.add_url_rule(endpt.get("path"),
                         "{} a {}".format(m.get("method"), endpt.get("name")),
                         m.get("handler"),
                         methods=[m.get("method")])

# docs
app.add_url_rule('/', "swagger docs", serve_docs)


# auth
@app.before_request
def auth_wrapper():
    if (request.path).startswith("/property"):
        (uInfo, err) = auth.validateIncomingRequest(request)
        if err is not None:
            return err_out(401, err)


if __name__ == '__main__':
    app.run(debug=True)
