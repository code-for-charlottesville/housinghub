while true; do

# setup testing configuration
export FLASK_APP=src/server/server.py
export DB_ENDPOINT=test
export TOKEN_EXP_SECONDS=1000
export PORT=5000
export DB_HOST="localhost"
export DB_PORT=5432
export DB_USER="testuser"
export DB_PASSWORD="password"
export DB_IN_MEMORY_ONLY="true"

python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html

inotifywait -e modify,create,delete -r ./ && \
	clear && \
	yapf -ri ./**/*.py && \
	autoflake --in-place --remove-unused-variables ./**/*.py && \
	coverage run -m pytest
done
