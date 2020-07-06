import uuid
import datetime
import app
from sqlalchemy.orm import sessionmaker
from models.note import Note

from flask import g


class NoteService:
    def __init__(self, logger, Session):
        super().__init__()
        self.session = Session()
        self.db_session = Session()

    def add_note(self, note: Note):
        note.id = str(uuid.uuid4())
        note.created_at = datetime.datetime.now()
        note.created_by = g.user_id
        self.session.add(note)
        self.session.commit()
        return note

    def update_note(self, payload):
        _note = self.session.query(Note).get({"id": payload["id"]})
        if (_note == None):
            app.logger.error('Note not found')
        self.session.query(Note).filter(Note.id == payload["id"]).update(payload)
        self.session.commit()
        return _note

    def delete_note(self, payload):
        _note = self.session.query(Note).get({"id": payload["id"]})
        if (_note == None):
            app.logger.error('Note not found')
        self.session.delete(_note)
        self.session.commit()
        return _note