# Mini Node App

Initialize the Redis container

```
docker-compose up -d
```

Edit the local IP address in the kubefiles/redis-external-endpoint.yaml, to find this IP you can run the command ifconfig and try to find it "wlo1".


Apply the k8s deployments

```
kubectl apply -f kubefiles/
```


To test the application just run the following commands:

```
export APP_HOST=$(minikube service leaderboard-poc-service --url)
curl $APP_HOST/leaderboard/games/1/users/100/score/3
curl $APP_HOST/leaderboard/games/1 
```