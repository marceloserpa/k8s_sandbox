# Dockerhub

Build and publish docker image
```
sudo docker build . -t dockerhub-hello
sudo docker tag dockerhub-hello:v1.0.0 marceloserpa/dockerhub-hello:v1.0.0
sudo docker push marceloserpa/dockerhub-hello:v1.0.0
```

Deploy docker image from dockerhub to k8s

```
kubectl create -f poc-dockerhub-hello.yml
```

Expose: 

Using port-forward(Just use it locally): 
```
kubectl port-forward dockerhub-hello.example.com 8080:8080
```

Using service on minikube
```
kubectl expose pod dockerhub-hello.example.com --type=NodePort --name dockerhub-hello-service
```
Get URL  
 
minikube service dockerhub-hello-service --url

