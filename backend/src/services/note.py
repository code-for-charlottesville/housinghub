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
        note.id = uuid.uuid4()
        note.created_at = datetime.datetime.now()
        note.created_by = g.user_id
        self.session.add(note)
        self.session.commit()
        return note

    def update_note(self, payload):
        _note = self.session.query(Note.id == payload["id"].update(payload))
        if (_note == None):
            app.logger.error('Note not found')
        self.session.query(Note).filter(Note.id == payload["id"]).update(payload)
        self.session.commit()
        return _note