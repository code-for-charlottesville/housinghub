#!/bin/sh

# Run Database changesets
cd alembic && python handler.py

cd ..
# Start app server
sls --stage tilt wsgi serve --host 0.0.0.0

