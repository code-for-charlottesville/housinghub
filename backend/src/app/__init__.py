from flask import Flask, send_file, request, g, jsonify
from services.container import ServicesContainer
from functools import wraps
import os
import time
import secrets
import app.config

import logging

from auth_handlers import auth_module

application_environment = os.getenv('APP_ENV','local')


flask_app = Flask(__name__)

application_environment = os.getenv('APP_ENV')
flask_app.logger.info(f'APP_ENV is {application_environment}')
if (application_environment == 'tilt'):
  flask_app.config.from_object(config.TiltConfig)
elif (application_environment == 'staging'):
  flask_app.config.from_object(config.StagingConfig)
elif (application_environment == 'production'):
  flask_app.config.from_object(config.ProductionConfig)
else:
  flask_app.config.from_object(config.Config)

services = ServicesContainer(flask_app.logger,flask_app.config)

flask_app.register_blueprint(auth_module)

@flask_app.route('/', methods=['GET'])
def swagger_specs():
  """Serves docs to browser"""
  return send_file("../../api/index.html")