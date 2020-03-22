import unittest
import db
import logging


class TestDBMethods(unittest.TestCase):
    def setUp(self):
        logging.getLogger().setLevel(logging.ERROR)

    def test_connectToDb():
        db.DB("tcp://dynamo-endpoint")

    def test_queryDb(self):
        db = db.DB("tcp://dynamo-endpoint")
        result = db.queryDb("test")
        self.assertEqual(result, None)