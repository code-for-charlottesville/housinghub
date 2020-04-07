import unittest
import db
import logging


class TestDBMethods(unittest.TestCase):
    def setUp(self):
        logging.getLogger().setLevel(logging.ERROR)

    def test_connectToDb(self):
        db.DB("tcp://dynamo-endpoint")

    def test_queryDb(self):
        db1 = db.DB("tcp://dynamo-endpoint")
        result = db1.query_db("test")
        self.assertEqual(result, None)