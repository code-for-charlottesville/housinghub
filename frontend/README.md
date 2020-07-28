# Housing Hub Frontend 

## Development

From the root directory of the project, start the local development environment by runing:

```bash
tilt up
```

After everything has started, create a new user in the DB by making a request to the DB:

```bash
curl -XPOST -H "content-type: application/json" -d '{"username" : "user@gmail.com", "password" : "password", "role" : "navigator", "is_admin": true}' http://localhost:8443/backend/auth/register
#response:
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODY3MTkyMTgsInVpZCI6IjUxYjBiNjU0LWI0OTItNDgxOC1iYmI3LTVhNzFmY2FiYmE3MCIsInJvbGUiOiJuYXZpZ2F0b3IifQ.Zn0LsAPNkXXkV2x5wgaZuHrMEnWXMqFNSGdoWdkFiDk"
}

```

Now go to the app's main page by opening http://localhost:8443 in your browser and use the above credentials to log in.

email: user@gmail.com
password: password

To add properties to the database, run the following command:

```bash
curl -XPOST \
 "http://localhost:8443/backend/property" \
 -H "content-type: application/json" \
 -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU5NjkxOTQsInVpZCI6Ijg0MmZiYjczLWUzNzctNDkxNC1iZmM3LWI0NDJhM2VlZjViYSIsInJvbGUiOiJuYXZpZ2F0b3IifQ.xlwY0p5-0gUO0-Fhh9POBvNppnSkf4dv_mOg65ARMNM" \
 -d '{"address":"520 East Main Street","allow_criminal_records":true,"application_fee":5000,"background_screening_company":"Cville Background Screening","bathrooms":1,"bedrooms":2,"bus_line":true,"contact_method":["phone"],"credit_screening_company":"Cville Credit Screening","date_first_available":"2020-06-30","deposit":500,"elevator":false,"floor":3,"has_basement":true,"housing_type":"apartment","is_available":true,"landlord_id":"842fbb73-e377-4914-bfc7-b442a3eef5ba","last_contact_date":"2020-03-20","last_contacted_by":"842fbb73-e377-4914-bfc7-b442a3eef5ba","last_month_rent_required":true,"listing_date":"2020-03-20","monthly_rent":1000,"navigator_id":"842fbb73-e377-4914-bfc7-b442a3eef5ba","potential_month_available":5,"property_name":"Davids Apartment","school_district":"CHS","shared_bathrooms":0,"unit_apt_no":"9","voucher_type_accepted":[],"voucher_type_not_accepted":[],"wheelchair_accessibility":true,"where_listed":["Zillow"],"year_available":2020,"zip_code":"22902"}'

 # response:

 {
  "address": "520 East Main Street",
  "allow_criminal_records": true,
  "application_fee": 5000.0,
  "background_screening_company": "Cville Background Screening",
  "bathrooms": 1,
  "bedrooms": 2,
  "bus_line": true,
  "contact_method": [
    "phone"
  ],
  "credit_screening_company": "Cville Credit Screening",
  "date_first_available": "2020-06-30",
  "deposit": 500.0,
  "elevator": false,
  "floor": 3,
  "has_basement": true,
  "housing_type": "apartment",
  "id": "487b01aa-d060-4892-8352-0d154b1dafb7",
  "is_available": true,
  "landlord_id": "842fbb73-e377-4914-bfc7-b442a3eef5ba",
  "last_contact_date": "2020-03-20",
  "last_contacted_by": "842fbb73-e377-4914-bfc7-b442a3eef5ba",
  "last_month_rent_required": true,
  "listing_date": "2020-03-20",
  "monthly_rent": 1000,
  "navigator_id": "842fbb73-e377-4914-bfc7-b442a3eef5ba",
  "potential_month_available": 5,
  "property_name": "Davids Apartment",
  "school_district": "CHS",
  "shared_bathrooms": 0,
  "unit_apt_no": "9",
  "voucher_type_accepted": [],
  "voucher_type_not_accepted": [],
  "wheelchair_accessibility": true,
  "where_listed": [
    "Zillow"
  ],
  "year_available": 2020,
  "zip_code": "22902"
}
```

## How to format Code

```bash
npx prettier --tab-width 2 --write src/**/*.js
```
## Prod

### Build

From the root directory, run 

```bash
docker build . -t codeforcharlottesville/housinghub-ui -f frontend/Dockerfile-prod
```

### Configure

In the production environment, set `backend_outgoing_url` to the URL of the housing hub backend.

### Deployment

The HousingHub frontend is deployed as a static asset to AWS S3 using the [serverless-finch plugin](https://github.com/fernando-mc/serverless-finch).

Deploying the frontend requires the backend API to be deployed already. The build process below needs to pull API endpoints from the backend APIs CloudFormation stack. If the backend stack doesn't exist, it will fail.

The deployment proess is two steps:


1. Build the project into a production-optimized bundle:

```sh
npx sls client build --stage dev
```

Note here that the stage arg is important. At build time, the frontend must be configured with the correct API endpoints which are pulled from the backend APIs CloudFormation stack. If the stage is not specified correctly then the frontend will not be using the correct API endpoint.

2. Deploy the static bundle:

```sh
npx sls client deploy --stage dev
```

