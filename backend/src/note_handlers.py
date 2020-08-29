import traceback

from flask import Blueprint, jsonify, request
from marshmallow import ValidationError, pprint
import json
import app
from app.api import NoteSchema, AddNoteRequest, NoteResponse
from app.auth import authenticate
from app.spec import DocumentedBlueprint


note_module = DocumentedBlueprint('note', __name__)

@note_module.route('/note', methods=['POST'])
@authenticate
def post_note():
    """
    adds a new Note to the database and returns response
    ---
    post:
        tags:
            - authentication
        summary: Creates a new note
        requestBody:
            required: true
            content:
                application/json:
                    schema: AddNoteRequest
        responses:
            '200':
                description: newly created note
                content:
                    application/json:
                        schema: NoteResponse
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
    
    try:
        payload = AddNoteRequest().load(request.get_json(force = True), transient=True)
        _note = app.services.note_service().add_note(payload)
        return jsonify(NoteResponse().dump(_note))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding note: ${traceback.format_exc()}')
    return jsonify(code=500, error='internal error'), 500



@note_module.route('/note', methods=['PUT'])
@authenticate
def put_note():
    """updates a Property in the DB and returns the updated object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        payload = request.get_json()
        _note = app.services.note_service().update_note(payload)
        return jsonify(NoteResponse().dump(_note))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='not implemented'), 500



@note_module.route('/note', methods=['DELETE'])
@authenticate
def delete_note():
    """deletes a note in the DB and returns the deleted object
    :param request: flask request object
    :param request: dictionary of jwtPayload
    :return tuple (response body (dict), response code (int), error (string))
    """
    try:
        payload = request.get_json()
        deleted_note = app.services.note_service().delete_note(payload)
        return jsonify(NoteResponse().dump(deleted_note))
    except ValidationError as err:
        app.logger.error(f'Invalid request ${err.messages}')
        return jsonify(err.messages), 400
    except:
        app.logger.error(
            f'Unexpected error adding property: ${traceback.format_exc()}')
        return jsonify(code=500, error='internal error'), 500
    return jsonify(code=500, error='not implemented'), 500
