while true; do

# setup testing configuration
export GRAPH_SAVE_PATH="$(pwd)/out/test1.graph"

inotifywait -e modify,create,delete -r ./ && \
	clear && \
	yapf -ri ./**/*.py && \
	autoflake --in-place --remove-unused-variables ./**/*.py && \
	pytest
done
