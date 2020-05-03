import test
import unittest
from unittest.mock import patch

import app


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

    def test_get_property(self):
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
        post_property_response = self.app.post("/property", json={"address":"1718 JPA","allow_criminal_records":True,"application_fee":0,"background_screening_company":"string","bathrooms":1,"bedrooms":1,"bus_line":True,"contact_method":["email"],"credit_screening_company":"string","date_first_available":"2020-10-10","deposit":0,"elevator":True,"floor":0,"has_basement":True,"housing_type":"apartment","is_available":True,"landlord_id":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","last_contact_date":"2009-02-20","last_contacted_by":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","last_month_rent_required":True,"listing_date":"2010-03-20","monthly_rent":700,"navigator_id":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","potential_month_available":0,"property_name":"JPA 1718","school_district":"Abermarle","shared_bathrooms":0,"unit_apt_no":"30","voucher_type_accepted":["ANV"],"voucher_type_not_accepted":["BBV"],"wheelchair_accessibility":True,"where_listed":["housing"],"year_available":2020,"zip_code":"22903"})
        response = self.app.post("/property/search", json=_search_request)
        self.assertEqual(post_property_response.status_code, 200)
        self.assertEqual(response.status_code, 200)

    def test_post_property(self):
        response = self.app.post("/property", json={"address":"1718 JPA","allow_criminal_records":True,"application_fee":0,"background_screening_company":"string","bathrooms":1,"bedrooms":1,"bus_line":True,"contact_method":["email"],"credit_screening_company":"string","date_first_available":"2020-10-10","deposit":0,"elevator":True,"floor":0,"has_basement":True,"housing_type":"apartment","is_available":True,"landlord_id":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","last_contact_date":"2009-02-20","last_contacted_by":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","last_month_rent_required":True,"listing_date":"2010-03-20","monthly_rent":700,"navigator_id":"fc4f8d8f-9cf0-462f-b179-d0306db89b1e","potential_month_available":0,"property_name":"JPA 1718","school_district":"Abermarle","shared_bathrooms":0,"unit_apt_no":"30","voucher_type_accepted":["ANV"],"voucher_type_not_accepted":["BBV"],"wheelchair_accessibility":True,"where_listed":["housing"],"year_available":2020,"zip_code":"22903"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["address"], "1718 JPA")

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
