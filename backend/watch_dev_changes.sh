while true; do

# setup testing configuration
export FLASK_APP=src/server.py
export DB_ENDPOINT=test
export PORT=5000

inotifywait -e modify,create,delete -r ./ && \
	clear && \
	yapf -ri ./**/*.py && \
	autoflake --in-place --remove-unused-variables ./**/*.py && \
	coverage run -m pytest
done
