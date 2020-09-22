# Housing Hub REST Backend 

RESTful API to handle storage, retrieval, and searching of landlords, navigators, and property.

*Note: this is only for unix operating systems*


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

in a new tab, make an example request:
```bash
# login new user to get jwt
$ curl -XPOST -H "content-type: application/json" -d '{"username" : "david", "password" : "davidrulz"}' http://localhost:5000/auth/login 
{"jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0Mjk3NjUsInVpZCI6ImI0OTM1OGZjLTcxMzctMTFlYS1iZDRmLWU0NzBiOGI2MTY4MyIsIm5hbWUiOiJkYXZpZCBnb2xkc3RlaW4ifQ.q6p91KS8iOme-K5baVlVSFBPW8K0kjdSJZ-IWSOF-cw"}
# make a request with this new jwt
$ curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0Mjk3NjUsInVpZCI6ImI0OTM1OGZjLTcxMzctMTFlYS1iZDRmLWU0NzBiOGI2MTY4MyIsIm5hbWUiOiJkYXZpZCBnb2xkc3RlaW4ifQ.q6p91KS8iOme-K5baVlVSFBPW8K0kjdSJZ-IWSOF-cw" http://localhost:5000/auth/status
{"exp":1585429765,"name":"david goldstein","uid":"b49358fc-7137-11ea-bd4f-e470b8b61683"}
# see that cannot make request with invalid jwt
$ curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODU0MzM0MjcsInVpZCI6IjNiOTJhZTVlLTcxNDAtMTFlYS1iZDRmLWU0NzBiOGI2MTY4MyIsIm5hbWUiOiJkYXZpZCBnb2xkc3RlaW4ifQ.j3bKF3YXalyHvFZ94LCZPN8HeuQEH5Bjbmusw-Js" http://localhost:5000/navigator
{"code":401,"error":"token is invalid"}
curl -XPOST -H "content-type: application/json" -d '{"username" : "user@gmail.com", "password" : "password", "role" : "navigator", "is_admin": true}' http://localhost:8443/backend/auth/register
```

post a new property: 

```bash
$ curl -XPOST "http://localhost:8443/backend/property" -H "content-type: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTgzOTY5MTgsInVpZCI6IjE4YmNiODA4LThkNTEtNDNmOS05N2NkLThhNzNkOGNhOWRhOCIsInJvbGUiOiJuYXZpZ2F0b3IifQ.S2qB5YPLPnikvIQmxA1_WVwVOZrnSILMGUJfGvF5oq0" -d '{"address":"2101 JPA", "allow_criminal_records":true, "application_fee":5000,"background_screening_company":"Cville Background Screening","bathrooms":3,"bedrooms":4,"near_busstop":true,"contact_method":["phone"],"credit_screening_company":"Cville Credit Screening","date_first_available":"2020-06-30","deposit":700,"elevator":false,"floor":3,"has_basement":false,"housing_type":"apartment","is_available":true,"landlord_id":"842fbb73-e377-4914-bfc7-b442a3eef5ba","last_contact_date":"2020-03-20","last_contacted_by":"842fbb73-e377-4914-bfc7-b442a3eef5ba","last_month_rent_required":true,"listing_date":"2020-03-20","monthly_rent":700,"navigator_id":"842fbb73-e377-4914-bfc7-b442a3eef5ba","potential_month_available":5,"property_name":"Maywood Apartment","school_district":"CHS","shared_bathrooms":1,"unit_apt_no":"4","voucher_type_accepted":[],"voucher_type_not_accepted":[],"wheelchair_accessibility":true,"where_listed":["Zillow"],"year_available":2020,"zip_code":"22903"}'
```

post a search request: 

```bash
$ curl -XPOST "http://localhost:8443/backend/property/search" -H "content-type: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTgzOTgyMjIsInVpZCI6IjE4YmNiODA4LThkNTEtNDNmOS05N2NkLThhNzNkOGNhOWRhOCIsInJvbGUiOiJuYXZpZ2F0b3IifQ.JCLGyQ3LwT-vJjmLmL6_RFSzmM0V-4JKPyyb7iUDvFU" -d '{ "pagination": { "page": 0, "results_per_page": 25}, "searchFields": { "bathrooms": 2, "bedrooms": 2, "date_available": "2008-10-11", "housing_type": ["apartment", "shared house"], "max_rent": 1000, "zip_code": ["22456", "22903", "22902"], "bus_line": true, "pets_allowed": true, "wheelchair_accessibility": true, "background_check_required": true} }'
```



## Generating New Data

Data can be generated in the `data` directory. You will need [npm](https://www.npmjs.com/get-npm) installed for this to work

1. Create new mock data output file:

```bash
cd data
npm install
node create_mock_csv.js output.csv
```

2. Now we can ingest this data into our API.

TODO:

```bash
cd data
node inject_data_from_csv.py output.csv
# TODO
```

## Test

Run tests to make sure everything is configured correctly.
```sh
pytest
```

See code coverage:
```sh
coverage run -m pytest
coverage html
open htlmcov/index.html
```

## Config

See [config.py](src/app/config.py) for a complete example of configuration settings. Relative paths start from the `src` directory.

There are configurations for four distinct environments. Which configuration object gets applied at runtime depends on the APP_ENV environment variable:

APP_ENV | Config Object | Environment Description
--------|---------------|-------------------------
local   | Config        | Local environment configuration
tilt    | Tilt          | Config for Tilt environment. Default value when using docker compose
staging | Staging       | Config applied to AWS staging environment
production | Production | Config applied to AWS production environment

Var | Meaning
--- | --- |
`PORT` | Port the server should run on
`DATABASE_URL` | Endpoint of the DB
`TOKEN_TTL` | How long tokens are good for in seconds. Default is 10800s
`TOKEN_ALG` | Algorithm used to sign the JWT token. Default is HS256
`TOKEN_SECRET` | Secret key used for JWT token signing. *This shoud always be generated at startup in production environments*

## Code Formatting

```sh
pip install yapf
yapf -ri ./**/*.py
```

## Non-tiltSetup

We recommend using `tilt` for development. This section serves as a reference for non-tilt development (if needed) and building the app locally.

### Requirements

- [install python 3.6.x](https://realpython.com/installing-python/)
- [install npm](https://www.npmjs.com/get-npm)
- [install the Serverless framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [install the psql CLI](https://www.pgcli.com/install)
- [docker](https://docs.docker.com/get-docker/)

- configure dev environment:

```bash
python3 -m venv venv
. venv/bin/activate
```

- install dependencies:

```bash
pip install -r requirements.txt
npm i
```

### Run

In order to run the app, you will need a Postgresql database to connect to. The easiest way to get started is to use Tilt (see instructions below), but you can create a local dockerized DB manually by running:

```sh
docker run -d -p 5432:5432 -e POSTGRES_DB=housinghub -e POSTGRES_USER=app -e POSTGRES_PASSWORD=apppassword postgres:11.7
```

Now you can run the Flask app by running 

```sh
export APP_ENV=local
export FLASK_APP=src/server.py
$(cd alembic && alembic upgrade head)
flask run
```

or run locally as a simulated serverless application
```sh
export APP_ENV=local
$(cd alembic && alembic upgrade head)
serverless wsgi serve
```

### Deployment 

This API is deployed as a serverless application on AWS. The entire stack deployment is handled by the serveress framework. **However**, the database migrations are not done as part of the deployment and have to be run separately from the serverless deployment (see details below).

#### Serverless Deployment

Ensure that your AWS credentials are setup:
```sh
aws configure
# Follow instructions to setup you ~/.aws/credentials file
```

For the dev environment:
```sh
npx sls deploy --stage dev
```

For the production environment:
```sh
npx sls deploy --stage prod
```

To deploy new code, just run the above commands again. It will deploy the new code package to our lambda functions and leave existing AWS resources in place. 

#### Database Migration

The serverless deployment will create our RDS instance so it must be deployed prior to running  the databse migration. Once the serverless stack is created though, the DB migrations can be run at any time. 

First, get the RDS DB cluster ARN:

```sh
# Get the RDS cluster identifier from the cloudformation stack
db_identifier=$(aws cloudformation describe-stack-resource --stack-name housinghub-api-dev --logical-resource-id housinghubDb --output json | jq -r '.StackResourceDetail.PhysicalResourceId')

# Set the cluster ARN as an env variable
export DB_CLUSTER_ARN=$(aws rds describe-db-clusters --db-cluster-identifier ${db_identifier} --output json | jq -r '.DBClusters[0].DBClusterArn')

# The Database credentials are stored in AWS Secrets Manager. We need to set the ARN of the secret as an env variable
export DB_SECRET_ARN=$(aws cloudformation describe-stack-resource --stack-name housinghub-api-dev --logical-resource-id housinghubDbSecret --output json | jq -r '.StackResourceDetail.PhysicalResourceId')

# Now run tht migration script
cd alembic && python migration.py
```

**Note** Above commands are for the dev stack. For prod, replace housinghub-api-dev with housinghub-api-prod


