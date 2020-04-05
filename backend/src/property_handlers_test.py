import unittest
from server import app
from models import User
from auth_handlers import encodeJWT


class TestPropertyHandlers(unittest.TestCase):

    user = User({
        "first_name": "david",
        "last_name": "goldstein",
        "user_name": "david1",
        "email": "temp@gmail.com",
        "role": "navigator",
        "role_id": "TEMP_ROLE_ID",
        "user_name": "david",
        "password": "davidrulz",
    })
    jwt = encodeJWT(user)
    authHeaders = dict(Authorization='Bearer ' + jwt)

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        app.config['TOKEN_EXP_SECONDS'] = "1000"
        self.app = app.test_client()

    def test_get_property(self):
        response = self.app.get("/property?id=test", headers=self.authHeaders)
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_post_property(self):
        response = self.app.post("/property",
                                 json={'name': 'test'},
                                 headers=self.authHeaders)
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_put_property(self):
        response = self.app.put("/property?td=test",
                                json={'name': 'test'},
                                headers=self.authHeaders)
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })

    def test_delete_property(self):
        response = self.app.delete("/property?id=test",
                                   headers=self.authHeaders)
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.get_json(), {
            'code': 500,
            'error': 'not implemented'
        })
