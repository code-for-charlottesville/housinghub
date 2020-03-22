# Housing Hub REST Backend 

RESTful API to handle storage, retrieval, and searching of landlords, navigators, and property.

## Setup

- [install python 3.6.x](https://realpython.com/installing-python/)
- configure dev environment:

```bash
python3 -m venv venv
. venv/bin/activate
```

- install dependencies:

```bash
pip install -r requirements.yaml
```

## Run

```sh
export FLASK_APP=src/server.py
export DYNAMO_DB_ENDPOINT=test
export PORT=5000
flask run
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
`DYNAMO_DB_ENDPOINT` | Endpoint of the running Dynamic DB

## Docker

```bash
docker build . -t codeforcharlottesville/housinghubapi
docker run -p 5000:5000 corcharlottesville/housinghubapi
```

## Code Formatting

```sh
pip install yapf
yapf -ri ./**/*.py
```

## Generating New Documentation

```sh
pip install PyYAML
python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html
```
