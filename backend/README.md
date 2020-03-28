# Housing Hub REST Backend 

RESTful API to handle storage, retrieval, and searching of landlords, navigators, and property.

*Note: this is only for unix operating systems*

## Setup

- [install python 3.6.x](https://realpython.com/installing-python/)
- configure dev environment:

```bash
python3 -m venv venv
. venv/bin/activate
```

- install dependencies:

```bash
pip install -r requirements.txt
```

## Run

```sh
export FLASK_APP=src/server/server.py
export DB_ENDPOINT=test
export TOKEN_EXP_SECONDS=300
export TOKEN_SECRET=randompassword
export PORT=5000
python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
flask run
```

in a new tab, make an example request:
```bash
curl -XPOST -H "content-type: application/json" -d '{"username" : "david", "password" : "davidrulz"}' http://localhost:5000/navigator
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
`TOKEN_SECRET` | Server secret to encode / decode jwt tokens

## Docker

Currently using header: `# syntax=docker/dockerfile:experimental`

This allows to  accelerate the building and using experimental features like caching dependencies

You would need to set up environment variables: `DOCKER_CLI_EXPERIMENTAL` and `DOCKER_BUILDKIT` 

```bash
export DOCKER_CLI_EXPERIMENTAL=enabled
export DOCKER_BUILDKIT=1
```

Then you can build and run the docker image:

```bash
docker build . -t codeforcharlottesville/housinghubapi:alpine-3.6-slim
docker run -p 5000:5000 codeforcharlottesville/housinghubapi:alpine-3.6-slim
```

## Code Formatting

```sh
pip install yapf
yapf -ri ./**/*.py
```

## Generating New Documentation

```sh
python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
```
