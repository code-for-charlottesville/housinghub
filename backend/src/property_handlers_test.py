import test
import unittest
from unittest.mock import patch
import app
import services
import services.auth, services.property


class TestPropertyHandlers(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.auth_service_patch = patch('services.container.AuthService',
                                        spec=True)
        mock_auth_service = self.auth_service_patch.start()
        instance = mock_auth_service.return_value
        self.auth_user = test.generate_user()
        instance.authenticate_request.return_value = (self.auth_user, None)
        self.app = app.flask_app.test_client()

    def tearDown(self):
        self.auth_service_patch.stop()

    @patch('services.container.PropertyService')
    def test_get_property(self, MockPropertyService):
        _search_request = {
            "pagination": {
                "page": 1,
                "results_per_page": 10
            },
            "searchFields": {
                "bathrooms": 2,
                "bedrooms": 2,
                "date_available": "2008-10-11",
                "housing_type": ["string"],
                "max_rent": 1000,
                "zip_code": ["22456"]
            }
        }
        response = self.app.post("/property/search", json=_search_request)
        self.assertEqual(response.status_code, 200)
    
    @patch('services.container.PropertyService')
    def test_get_property_2(self, MockPropertyService):
        bathrooms = 1
        bedrooms = 1
        date_available = "2020-12-11"
        housing_type = ["apartment", "house"]
        max_rent = 1000
        zip_code = ["22903", "22904"]
        _search_request = {
            "pagination": {
                "page": 1,
                "results_per_page": 10
            },
            "searchFields": {
                "bathrooms": bathrooms,
                "bedrooms": bedrooms,
                "date_available": date_available,
                "housing_type": housing_type,
                "max_rent": max_rent,
                "zip_code": zip_code
            }
        }
        response = self.app.post("/property/search", json=_search_request)
        self.assertEqual(response.status_code, 200)
        for result in response.get_json()["results"]:
            self.assertEqual(result["zip_code"] in zip_code, True)
            self.assertEqual(result["monthly_rent"] <= max_rent, True)
            self.assertEqual(result["housing_type"] in housing_type, True)
            self.assertEqual(result["bedrooms"], bedrooms)
            self.assertEqual(result["bathrooms"], bathrooms)
    
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
