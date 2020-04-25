import traceback

import requests
from flask import Blueprint, jsonify, request
from marshmallow import Schema, ValidationError, fields, pprint, validates

import app
from app.api import AuthResponse, ErrorResponse, LoginRequest, RegisterRequest
from app.spec import DocumentedBlueprint

auth_module = DocumentedBlueprint('auth', __name__, url_prefix='/auth')


@auth_module.route('/register', methods=['POST'])
def register():
    """Register a new HousingHub user
    ---
    post:
        tags: 
            - authentication    
        summary: Creates a new user
        requestBody:
            required: true
            content:
                application/json:
                    schema: RegisterRequest
        responses:
            '200':
                description: Auth token for newly created user
                content:
                    application/json:
                        schema: AuthResponse
            '400':
                description: Request is invalid
                content:
                    application/json:
                        schema: ErrorResponse
            '500':
                description: An error message.
                content:
                    application/json:
                        schema: ErrorResponse
    """
    # get user info from front end
    try:
        payload = RegisterRequest().load(request.get_json())
        created_user = app.services.user_service().add_user(
            payload['username'], payload['password'], payload['role'],
            payload['is_admin'])
        if created_user:
            jwt_token = app.services.auth_service().encode_jwt(created_user)
            return jsonify(AuthResponse().dump({'jwt': jwt_token}))
        return jsonify(code=500, error='internal error'), 500
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(code=400, error=err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error registering new user: ${traceback.format_exc()}'
        )
        return jsonify(code=500, error='internal error'), 500


@auth_module.route('/login', methods=['POST'])
def login():
    """Login with username and password
    ---
    post:
      tags: 
        - authentication    
      summary: retrieves a jwt token from the server, acting as user authentication
      requestBody:
        required: true
        content:
            application/json:
              schema: LoginRequest

      responses:
        '200':
          description: The newly created jwt token
          content:
            application/json:
              schema: AuthResponse
        '500':
          description: An error message.
          content:
            application/json:
              schema: ErrorResponse
    """
    try:
        payload = LoginRequest().load(request.get_json())
        user = app.services.auth_service().validate_login(
            payload['username'], payload['password'])
        if user:
            # create a JWT token and return to front end
            return jsonify(
                {'jwt': app.services.auth_service().encode_jwt(user)})
        return jsonify(code=401, error='Login invalid'), 401
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(code=400, error=err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error registering new user: ${traceback.format_exc()}'
        )
        return jsonify(code=500, error='internal error'), 500


@auth_module.route('/status', methods=['GET'])
def get_login_status():
    """Get current authentication status
    ---
    get:
      tags: 
        - authentication    
      summary: Verify if a user's is currently valid and see jwt token payload
      responses:
        '200':
          description: jwt payload for user
          content:
            application/json:
              schema: AuthResponse
        '500':
          description: An error message.
          content:
            application/json:
              schema: ErrorResponse
    """
    auth_service = app.services.auth_service()
    (user, err) = auth_service.authenticate_request(request)
    if user:
        return jsonify(user), 200
    return jsonify(code=401, error='Not logged in'), 401
