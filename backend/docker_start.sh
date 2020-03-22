#!/bin/sh

# poll save endpoint
save_graph_poll() {
  ENDPOINT="http://localhost:5000/save"
  while true
  do
    sleep $GRAPH_SAVE_INTERVAL
    curl -s $ENDPOINT | wc -c
    if [ $USE_S3 = "true" ]
    then
    	echo "syncing with s3"
    	aws s3 sync /data $AWS_SYNC_DIRECTORY 
    fi
  done
}

# download from s3
if [ $USE_S3 = "true" ]
then
	echo "configuring s3"
	aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
	aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
	aws configure set default.region $AWS_DEFAULT_REGION
	aws s3 cp $AWS_GRAPH_PATH $GRAPH_SAVE_PATH
fi

# start cron job
save_graph_poll &

# start flask app
printenv
echo "/data : "
ls -lh /data
flask run --host=0.0.0.0 --port $PORT
