#!/usr/bin/zsh

start_time=$(date +%s%3N)

./gradlew clean build

docker build -f Dockerfile2 . -t springboot4-poc:bake2

end_time=$(date +%s%3N)
duration_ms=$((end_time - start_time))

echo "Time elapsed $duration_ms ms."
