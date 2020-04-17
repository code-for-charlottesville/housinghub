from flask import Flask, send_file, request, g, jsonify, render_template
from services.container import ServicesContainer
from functools import wraps
import os
import time
import secrets
import json
from  app.config import Config, TiltConfig, StagingConfig, ProductionConfig

from .spec import housinghub_spec

import logging

from auth_handlers import auth_module
from landlord_handlers import landlord_module
from navigator_handlers import navigator_module
from property_handlers import property_module

flask_app = Flask(__name__)

logger = flask_app.logger

application_environment = os.getenv('APP_ENV')
flask_app.logger.info(f'APP_ENV is {application_environment}')
if (application_environment == 'tilt'):
  flask_app.config.from_object(TiltConfig)
elif (application_environment == 'staging'):
  flask_app.config.from_object(StagingConfig)
elif (application_environment == 'production'):
  flask_app.config.from_object(ProductionConfig)
else:
  flask_app.config.from_object(Config)

services = ServicesContainer(flask_app.logger,flask_app.config)

flask_app.register_blueprint(auth_module)
flask_app.register_blueprint(landlord_module)
flask_app.register_blueprint(navigator_module)
flask_app.register_blueprint(property_module)


@flask_app.route('/spec', methods=['GET'])
def get_spec():
  return jsonify(housinghub_spec.to_dict())

@flask_app.route('/', methods=['GET'])
def swagger_specs():
  """Serves docs to browser"""
  return render_template('spec.html', spec=housinghub_spec.to_dict())