from python:2.7
run apt-get update
workdir /usr/graphApi

# copy app and copy dependencies
copy . /usr/graphApi
run pip install -r requirements.txt
run pip install awscli

# generate documentation
run python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html

# configure app
env FLASK_APP src/server.py
run > config.cfg
run echo 'METRICS_HOST = "http://127.0.0.1"' >> config.cfg
run echo 'METRICS_PORT = 8001' >> config.cfg
run echo 'SHORTEST_PATH_TIMEOUT = 3000' >> config.cfg
run echo 'HOST = "0.0.0.0"' >> config.cfg
run echo 'TESTING = "False"' >> config.cfg
run echo 'DEBUG = True' >> config.cfg
run cat config.cfg
# configure saving
run mkdir /data
env GRAPH_SAVE_PATH "/data/current_graph.graph"
env GRAPH_SAVE_INTERVAL 60
env PORT "5000"
# run app
CMD ./docker_start.sh
