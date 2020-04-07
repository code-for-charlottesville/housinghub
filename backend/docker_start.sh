#!/bin/sh

# Run Database changesets
$(cd alembic && alembic upgrade head)

# Start app server
sls wsgi serve --host 0.0.0.0

