import unittest

from server import app

MAX_INT = 999999999.0


class TestServer(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DYNAMO_DB_ENDPOINT'] = "tcp://dynamodb"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_serve_docs(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)
