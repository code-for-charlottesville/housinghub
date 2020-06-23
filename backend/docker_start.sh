#!/bin/sh

# Run Database changesets
cd alembic && python migration.py

cd ..
# Start app server
sls --stage tilt wsgi serve --host 0.0.0.0

