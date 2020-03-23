import unittest
from server import app


class TestPropertyHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DYNAMO_DB_ENDPOINT'] = "tcp://dynamodb"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_get_property(self):
        response = self.app.get("/property?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_property(self):
        response = self.app.post("/property", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_property(self):
        response = self.app.put("/property?td=test", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_property(self):
        response = self.app.delete("/property?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
