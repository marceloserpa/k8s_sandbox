# Mini Node App with Helm

Initialize the Redis container

```
cd docker/
docker-compose up -d
```

Edit the local IP address (redisExternalService.ipAddress) in the leaderboard-charts/values.yaml.
If you don't known which is this IP, you can run the command ifconfig and search for a network with name "wlo1".


To install this helm you just need to run it:

```
helm install leaderboard-app leaderboard-charts
```
