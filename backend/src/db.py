import logging
from models import User, Base
import sqlalchemy
from sqlalchemy.orm import sessionmaker


class DB:
    """class which interfaces a dynamo DB"""
    def __init__(self, host, user, password, port=5432, in_memory=False):
        """attempts to connect to db, throws exception on error"""
        if in_memory:
            self.db_url = 'sqlite:///:memory:'
        else:
            self.db_url = "postgresql+pygresql://{}:{}@{}:{}/housinghub".format(
                user, password, host, int(port))
        self.in_memory = in_memory
        self.connect_to_db()

    def load_tables(self):
        pass

    def connect_to_db(self):
        """attemps initial connection to DB. Throws error on failure"""
        print("connecting to DB: {}".format(self.db_url))
        try:
            self.engine = sqlalchemy.create_engine(self.db_url)
            # create tables
            Base.metadata.create_all(self.engine)
            Base.metadata.bind = self.engine
            # connection to DB
            self.engine.connect()
            self.Session = sessionmaker(bind=self.engine)
            self.metadata = sqlalchemy.MetaData()
            print("Loaded db '{}' successfully with tables: {}".format(
                self.db_url, self.metadata.tables.keys()))
        except sqlalchemy.exc.InternalError as e:
            logging.error("Exception loading db '{}' at url '{}'".format(
                e, self.db_url))
            raise e

    def get_metadata(self):
        return self.metadata

    def new_session(self):
        return self.Session()

    def username_already_exists(self, username):
        """
        checks if user name already exists in users table
        :param: string username
        :return: boolean exists
        """
        session = self.new_session()
        try:
            u = session.query(User).filter_by(username=username).one()
            session.commit()
        except sqlalchemy.orm.exc.NoResultFound:
            return False
        return u is not None

    def add(self, obj):
        """
        adds an object to the db
        :param: string name of table to add object to
        :param: dictionary object to add
        :return: string error
        """
        session = self.new_session()
        try:
            session.add(obj)
            session.commit()
        except sqlalchemy.orm.exc.UnmappedInstanceError as e:
            logging.error(e)
            return "table {} does not exist".format(tableName)

    def query_db(self, q):
        """
        queries DB
        :parma q: (string) - query to be passed to DB
        """
    def validate_login(self, username, password):
        """validates if the username and password is valid for users in the db
        :param username: (string) username to validate
        :param password: (string) password to validate
        :return tuple: in the format (user[User], error[string])
        """
        s = self.new_session()
        _user = s.query(User).filter(User.username == username).one_or_none()
        s.commit()
        if _user is None:
            return (None, "Invalid username or password")
        if _user.check_password(password) is False:
            return (None, "Invalid username or password")
        return (_user, None)
