import unittest

import app


class TestServer(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.app = app.flask_app.test_client()

    def test_serve_docs(self):
        response = self.app.get('/', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.data)
