# Deployments + Services


Creating an image and sending to DockerHub

```
sudo docker login

sudo docker build . -t hello-deployment-app
sudo docker tag hello-deployment-app:latest marceloserpa/hello-deployment-app:v0.1.0
sudo docker push marceloserpa/hello-deployment-app:v0.1.0
```


```
kubectl get deployments
kubectl get rs
kubectl get pods --show-labels

kubectl set image deployment/hello-deployment dockerhub-hello=dockerhub-hello:latest
kubectl rollout status deployment/hello-deployment

kubectl edit deployment/hello-deployment

kubectl rollout history deployment/hello-deployment
kubectl rollout undo deployment/hello-deployment to-revions=n
```
