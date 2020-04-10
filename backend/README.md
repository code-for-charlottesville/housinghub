# Housing Hub REST Backend 

RESTful API to handle storage, retrieval, and searching of landlords, navigators, and property.

*Note: this is only for unix operating systems*

## Setup

- [install python 3.6.x](https://realpython.com/installing-python/)
- [install npm](https://www.npmjs.com/get-npm)
- [install the Serverless framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [install the psql CLI](https://www.pgcli.com/install)

```sh
npm install -g serverless
```

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


## Run

In order to run the app, you will need a Postgresql database to connect to. The easiest way to get started is to use Tilt (see instructions below), but you can create a local dockerized DB manually by running:

```sh
docker-compose up -d postgres
```

Now you can run the Flask app by running 

```sh
export FLASK_APP=src/server.py
export FLASK_ENV=development
export TOKEN_EXP_SECONDS=1000
export DB_IN_MEMORY_ONLY=false
export PORT=5000
export DB_HOST="localhost"
export DB_PORT=5432
export DB_USER="app"
export DB_PASSWORD="apppassword"
export APP_ENV="local"
$(cd alembic && alembic upgrade head)
python3 api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
flask run
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

$ curl -XPOST -H "content-type: application/json" -d '{"username" : "david", "password" : "davidrulz", "role_id" : "4", "role" : "navigator", "is_admin": true}' http://localhost:5000/auth/register
```

Now let's go into the database to see the user we just created

```bash
$ psql postgres://app:apppassword@localhost:5432/housinghub
psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 11.7 (Debian 11.7-2.pgdg90+1))
WARNING: psql major version 10, server major version 11.
         Some psql features might not work.
Type "help" for help
...
```
Type \dt which lists all datatables in the databse
```bash
housinghub=# \dt
            List of relations
 Schema |      Name       | Type  | Owner 
--------+-----------------+-------+-------
 public | alembic_version | table | app
 public | landlords       | table | app
 public | navigators      | table | app
 public | users           | table | app
(4 rows)
```
To show the user we created from the curl request above, type the following query:
```bash
housinghub=# select * from users;
                   id                   | username | password  |   role    | role_id | is_admin 
----------------------------------------+----------+-----------+-----------+---------+----------
 u-0967cad0-7768-11ea-81eb-e470b8b61683 | david    | davidrulz | navigator | 4       | f
(1 row)
```

Now type \q to quit.

## Development

Development can be easier with the `./watch_dev_changes.sh` script. Run the script in a running terminal while making code changes. On each save of a file, the script will 

- format code
- remove unneeded variables
- run tests

## Test

Run tests to make sure everything is configured correctly.
```sh
pytest
```

See code coverage:
```sh
coverage run -m pytest
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

## Using Tilt for local development

For a local development workflow, we are using Tilt. 

For instructions on using Tilt for local developmet, see the [Developer Quickstart](https://github.com/code-for-charlottesville/housinghub/wiki/Developer-Quickstart)

## Code Formatting

```sh
pip install yapf
yapf -ri src/*.py
```

## Generating New Documentation

```sh
python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
```
