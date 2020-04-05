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

# generate documentation
RUN python api/swagger-yaml-to-html.py < api/swagger.yml > api/index.html

CMD sls wsgi serve --host 0.0.0.0