# Dockerhub

Build and publish docker image
```
sudo docker tag dockerhub-hello:latest marceloserpa/dockerhub-hello:latest
sudo docker push marceloserpa/dockerhub-hello:latest
```

Deploy docker image from dockerhub to k8s

```
kubectl create -f poc-dockerhub-hello.yml
```