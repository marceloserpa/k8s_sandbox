# Deployments + Services


Creating an image and sending to DockerHub

```
sudo docker login

sudo docker build . -t hello-deployment-app
sudo docker tag hello-deployment-app:latest marceloserpa/hello-deployment-app:v0.1.0
sudo docker push marceloserpa/hello-deployment-app:v0.1.0
```

Deploying a new Pod

```
kubectl create -f hello-deployment.yml
kubectl get pods
```

Creating a Service for the Pod

```
kubectl create -f hello-service.yml
kubectl get svc
```

Testing 

```
minikube service hello-service --url
curl http://192.168.99.100:31001/hello
```
