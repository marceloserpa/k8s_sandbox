#!/bin/bash

REPO=marceloserpa
APP_NAME=leaderboard-poc
VERSION=v0.0.3-SNAPSHOT

IMG=$REPO/$APP_NAME:$VERSION

echo "Creating image: $IMG"
docker build -t $IMG .

docker push $IMG