import unittest
from server import app


class TestServer(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_SECRET'] = "r4?89N;-Pe/mj)5!"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_serve_docs(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)
