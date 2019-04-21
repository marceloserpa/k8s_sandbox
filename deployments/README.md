# Deployments


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
