import unittest
import db
import logging
import sqlalchemy


class TestDBMethods(unittest.TestCase):
    host = "localhost"
    user = "dbuser"
    password = "password"
    port = 5432
    in_memory = True

    def setUp(self):
        logging.getLogger().setLevel(logging.ERROR)

    def test_connectToDb(self):
        db.DB(self.host, self.user, self.password, self.port, self.in_memory)
        with self.assertRaises(sqlalchemy.exc.InternalError):
            db.DB(self.host,
                  self.user,
                  self.password,
                  self.port,
                  in_memory=False)
