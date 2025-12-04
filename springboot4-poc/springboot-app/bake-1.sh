#!/usr/bin/zsh

start_time=$(date +%s%3N)

./gradlew clean build

docker build . -t springboot4-poc:bake1

end_time=$(date +%s%3N)
duration_ms=$((end_time - start_time))

echo "Time elapsed $duration_ms ms."
