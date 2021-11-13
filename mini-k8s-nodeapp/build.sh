#!/bin/bash

docker build -t marceloserpa/hello-node-app:v0.0.2 .

docker push marceloserpa/hello-node-app:v0.0.2