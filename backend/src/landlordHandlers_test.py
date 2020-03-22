import unittest
from server import app


class TestLandlordHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DYNAMO_DB_ENDPOINT'] = "tcp://dynamodb"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_get_landlord(self):
        response = self.app.get("/landlord?id=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_landlord(self):
        response = self.app.post("/landlord", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_landlord(self):
        response = self.app.put("/landlord?td=test", json={'name': 'test'})
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_landlord(self):
        response = self.app.delete("/landlord?td=test")
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
