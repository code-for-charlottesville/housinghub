# graphApi
RESTful graph API to handle analysis on millions of nodes


## Setup

- install pxython 3.6.x
- install virtual env
- configure environment and install dependencies

```bash
python3 -m venv venv
. venv/bin/activate
```

## Run

```sh
export FLASK_APP=src/server.py
export DYNAMO_DB_ENDPOINT=test
export PORT=5000
flask run
```


## Test

Run tests to make sure everything is configured correctly.
```sh
pytest
```

See code coverage:
```sh
coverage run -m pytest
```

## Config

See [config](config.cfg) for a complete example of configuration settings. Relative paths start from the `src` directory.

Var | Meaning
--- | --- |
`PORT` | Port the server should run on
`DYNAMO_DB_ENDPOINT` | Endpoint of the running Dynamic DB

As a docker container, there is a cron job which saves the graph on an interval. This is configured by the environment variable `GRAPH_SAVE_INTERVAL`. `GRAPH_DATA_PATH` is where the data should be mounted. Defaults to `/data`.

## Benchmarking

  - tested to safely handle < 100 concurrent requests @ <100ms latency
  - start to get failures aroudn 200 concurrent requests, latency climbs to 500 ms

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
