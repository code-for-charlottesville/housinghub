#!/bin/sh

# start flask app
printenv
flask run --host=0.0.0.0 --port $PORT
