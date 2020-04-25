# syntax=docker/dockerfile:experimental
from python:3.6-stretch


# RUN apk update && apk add unzip curl openntpd nodejs npm gcc
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN node -v && npm -v

# User based development environment
RUN npm install -g serverless

WORKDIR /usr/housinghub
COPY . /usr/housinghub

RUN npm install --save-dev serverless-python-requirements
RUN npm install --save-dev serverless-wsgi

# install python dependencies
RUN --mount=type=cache,target=/root/.cache/pip pip install -r requirements.txt

CMD /bin/sh docker_start.sh
