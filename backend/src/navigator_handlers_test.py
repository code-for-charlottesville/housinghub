import unittest
from server import app


class TestNavigatorHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_SECRET'] = "r4?89N;-Pe/mj)5!"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_get_navigator(self):
        response = self.app.get("/navigator?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_navigator(self):
        response = self.app.post("/navigator", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_navigator(self):
        response = self.app.put("/navigator?td=test", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_navigator(self):
        response = self.app.delete("/navigator?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
