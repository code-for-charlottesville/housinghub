import traceback

from flask import Blueprint, jsonify, request
from marshmallow import ValidationError, pprint
import json
import app
from app.api import NoteSchema, AddNoteRequest
from app.auth import authenticate
from app.spec import DocumentedBlueprint


note_module = DocumentedBlueprint('note', __name__)

@note_module.route('/note', methods=['POST'])
@authenticate
def post_note():
    """
    TO DO
    """
    return jsonify(code=500, error='not implemented'), 500
