from flask import Flask, request, jsonify, send_file, redirect, Response
from flask_restful import Resource, Api
import requests
from flask_prometheus import monitor
import db
import navigatorHandlers

# flask setup
app = Flask(__name__)
app.config.from_pyfile('../config.cfg')
# db setup
db = db.DB()

#########
## api ##
#########

# Navigator function
app.add_url_rule('/navigator',
                 "get navigator",
                 navigatorHandlers.getNavigator,
                 methods=["GET"])
app.add_url_rule('/navigator',
                 "add navigator",
                 navigatorHandlers.postNavigator,
                 methods=["POST"])
app.add_url_rule('/navigator',
                 "update navigator",
                 navigatorHandlers.putNavigator,
                 methods=["PUT"])
app.add_url_rule('/navigator',
                 "delete navigator",
                 navigatorHandlers.deleteNavigator,
                 methods=["DELETE"])
# docs
app.add_url_rule('/', "swagger docs", serveDocs)

def serveDocs():
    """Serves docs to browser"""
    return send_file("../api/index.html")


def errOut(code, error):
	"""util function for returning non-2xx respoinse"""
    logging.error(error)
    return jsonify(code=code, error=error), code


if __name__ == '__main__':
    app.run(debug=True)
