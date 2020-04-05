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
        logging.info("connecting to DB: {}".format(self.db_url))
        try:
            self.engine = sqlalchemy.create_engine(self.db_url)
            # create tables
            Base.metadata.create_all(self.engine)
            Base.metadata.bind = self.engine
            # connection to DB
            self.engine.connect()
            self.Session = sessionmaker(bind=self.engine)
            self.metadata = sqlalchemy.MetaData()
            logging.info("Loaded db '{}' successfully with tables: {}".format(
                self.db_url, self.metadata.tables.keys()))
        except sqlalchemy.exc.InternalError as e:
            logging.error("Exception loading db '{}' at url '{}'".format(
                e, self.db_url))
            raise e

    def get_metadata(self):
        return self.metadata

    def add(self, tableName, obj):
        """
        adds an object to the db
        :param: string name of table to add object to
        :param: dictionary object to add
        :return: string error
        """
        session = self.Session()
        try:
            session.add(obj)
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
        if password != "davidrulz":
            return ({}, "incorrect username or password")

        tempUserConfig = {
            "first_name": "david",
            "last_name": "goldstein",
            "user_name": "david1",
            "email": "temp@gmail.com",
            "role": "navigator",
            "role_id": "TEMP_ROLE_ID",
            "username": "david",
            "password": "davidrulz",
        }
        return (User(tempUserConfig), None)
