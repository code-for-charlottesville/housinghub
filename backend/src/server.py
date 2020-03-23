from flask import Flask, request, jsonify, send_file, redirect, Response
from flask_restful import Resource, Api
import requests
import db
import navigatorhandlers
import landlordhandlers
import propertyhandlers
import os
import logging

# flask setup
app = Flask(__name__)
app.config.from_pyfile('../config.cfg')
# db setup
db = db.DB(os.environ['DYNAMO_DB_ENDPOINT'])

##########
## util ##
##########


def server_docs():
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
        "handler": navigatorhandlers.get_navigator
    }, {
        "method": "POST",
        "handler": navigatorhandlers.post_navigator
    }, {
        "method": "PUT",
        "handler": navigatorhandlers.put_navigator
    }, {
        "method": "DELETE",
        "handler": navigatorhandlers.delete_navigator
    }]
}, {
    "name":
    "landlord",
    "path":
    "/landlord",
    "methods": [{
        "method": "GET",
        "handler": landlordhandlers.get_landlord
    }, {
        "method": "POST",
        "handler": landlordhandlers.post_landlord
    }, {
        "method": "PUT",
        "handler": landlordhandlers.put_landlord
    }, {
        "method": "DELETE",
        "handler": landlordhandlers.delete_landlord
    }]
}, {
    "name":
    "property",
    "path":
    "/property",
    "methods": [{
        "method": "GET",
        "handler": propertyhandlers.get_property
    }, {
        "method": "POST",
        "handler": propertyhandlers.post_property
    }, {
        "method": "PUT",
        "handler": propertyhandlers.put_property
    }, {
        "method": "DELETE",
        "handler": propertyhandlers.delete_property
    }]
}]

for endpt in supportedCrudEndpoints:
    for m in endpt.get("methods"):
        app.add_url_rule(endpt.get("path"),
                         "{} a {}".format(m.get("method"), endpt.get("name")),
                         m.get("handler"),
                         methods=[m.get("method")])

# docs
app.add_url_rule('/', "swagger docs", server_docs)

if __name__ == '__main__':
    app.run(debug=True)
