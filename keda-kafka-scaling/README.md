# foo service


## create container for foo-service


```
docker build -t marceloserpa/foo-app .
docker run --network=host -it 92ffec9be608 
docker push marceloserpa/foo-app
```

## connect on Kafka and execute producer

```
docker exec --interactive --tty d0a0ca63a74b kafka-console-producer --bootstrap-server localhost:9092 --topic marcelo-topic
```