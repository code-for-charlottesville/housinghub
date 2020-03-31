# Housing Hub REST Backend 

RESTful API to handle storage, retrieval, and searching of landlords, navigators, and property.

*Note: this is only for unix operating systems*

## Setup

- [install python 3.6.x](https://realpython.com/installing-python/)
- install the Serverless framework

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
docker run -d -p 5432:5432 -e POSTGRES_DB=housinghub -e POSTGRES_USER=app -e POSTGRES_PASSWORD=apppassword postgres:11.7
```

Now you can run the Flask app by running 

```sh
export DB_HOST=0.0.0.0
export DB_USER=app
export DB_PASSWORD=apppassword
export TOKEN_EXP_SECONDS=300
export TOKEN_SECRET_KEY_ROTATION_SECONDS=randompassword
export PORT=5000
python3 api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
serverless wsgi serve
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
```

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

See [config](config.cfg) for a complete example of configuration settings. Relative paths start from the `src` directory.

Var | Meaning
--- | --- |
`PORT` | Port the server should run on
`DB_ENDPOINT` | Endpoint of the DB
`TOKEN_EXP_SECONDS` | How long tokens are good for in seconds. Default is 10800s
`TOKEN_SECRET_KEY_ROTATION_SECONDS` | The interval between the secret signing key for jwt tokens is rotated. Defaults to 172800 (2 days)

## Docker

Currently using header: `# syntax=docker/dockerfile:experimental`

This allows to  accelerate the building and using experimental features like caching dependencies

You would need to set up environment variables: `DOCKER_CLI_EXPERIMENTAL`, `DOCKER_BUILDKIT` and `COMPOSE_DOCKER_CLI_BUILD`

```bash
export DOCKER_CLI_EXPERIMENTAL=enabled
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1
```

Then you can build and run the docker image:

```bash
docker build . -t codeforcharlottesville/housinghub:latest
docker-compose up
```

## Using Tilt for local development

For a local development workflow, we are using Tilt. 

First you need to install Tilt. For macOS users with Homebrew installed, you can simply 

```sh
brew install windmilleng/tap/tilt
```

For other platforms see [https://docs.tilt.dev/install.html](https://docs.tilt.dev/install.html)

Note that in order for Tilt to work you need both Docker and Docker Compose installed on your local system. 

Once you have everything installed, you can start the environment by running 

```sh
tilt up 
```

from the /backend folder. 

While tilt is running, any code changes made locally will be synced to the docker container on the fly so you can make changes and quickly see the results in your local instance. 

## Code Formatting

```sh
pip install yapf
yapf -ri ./**/*.py
```

## Generating New Documentation

```sh
python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
```
