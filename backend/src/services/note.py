import uuid

from sqlalchemy.orm import sessionmaker

from models.note import Note

class NoteService:
    def __init__(self, logger, Session):
        super().__init__()
        self.session = Session()
        self.db_session = Session()

    def add_note(self, note: Note):
        ## TO DO
        return None
