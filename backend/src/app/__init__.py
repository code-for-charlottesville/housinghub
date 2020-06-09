import os

from flask import Flask, g, jsonify, render_template, request, send_file

from app.config import Config, ProductionConfig, DevConfig, TiltConfig, Config
from auth_handlers import auth_module
from landlord_handlers import landlord_module
from navigator_handlers import navigator_module
from property_handlers import property_module
from note_handlers import note_module
from services.container import ServicesContainer

from .spec import housinghub_spec

flask_app = Flask(__name__)

logger = flask_app.logger

application_environment = os.getenv('APP_ENV')
logger.info(f'APP_ENV is {application_environment}')
if application_environment == 'tilt':
  flask_app.config.from_object(TiltConfig)
elif application_environment == 'dev':
  flask_app.config.from_object(DevConfig)
elif application_environment == 'prod':
  flask_app.config.from_object(ProductionConfig)
else:
  flask_app.config.from_object(Config)

services = ServicesContainer(flask_app.logger,flask_app.config)

flask_app.register_blueprint(auth_module)
flask_app.register_blueprint(landlord_module)
flask_app.register_blueprint(navigator_module)
flask_app.register_blueprint(property_module)
flask_app.register_blueprint(note_module)

@flask_app.route('/spec', methods=['GET'])
def get_spec():
  return jsonify(housinghub_spec.to_dict())

@flask_app.route('/', methods=['GET'])
def swagger_specs():
  """Serves docs to browser"""
  return render_template('spec.html', spec=housinghub_spec.to_dict())
