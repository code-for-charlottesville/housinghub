while true; do

# setup testing configuration
export FLASK_APP=src/server/server.py
export DB_ENDPOINT=test
export TOKEN_EXP_SECONDS=1000
export PORT=5000

inotifywait -e modify,create,delete -r ./ && \
	clear && \
	yapf -ri ./**/*.py && \
	autoflake --in-place --remove-unused-variables ./**/*.py && \
	coverage run -m pytest
done
