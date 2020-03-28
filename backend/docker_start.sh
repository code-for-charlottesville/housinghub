#!/bin/sh

# start flask app
echo "environment:"
echo "PORT=$PORT -- Port the server should run on"
echo "DB_ENDPOINT=$DB_ENDPOINT -- Endpoint of the DB"
echo "TOKEN_EXP_SECONDS=$TOKEN_EXP_SECONDS -- How long tokens are good for in seconds. Default is 10800s"
flask run --host=0.0.0.0 --port $PORT
