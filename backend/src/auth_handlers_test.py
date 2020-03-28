import unittest
from server import app


class TestAuthHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        app.config['DB_ENDPOINT'] = "tcp://dynamodb"
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    def test_login_user(self):
        # username is valid
        response = self.app.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz'
                                 })
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'jwt': 'testjwttoken'})
        # username is not valid
        response = self.app.post("/auth/login",
                                 json={
                                     'username': 'david',
                                     'password': 'davidrulz-bad-password'
                                 })
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.get_json(), {
            'code': 401,
            'error': "incorrect username or password"
        })
