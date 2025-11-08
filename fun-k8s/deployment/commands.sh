kubectl apply -f deployment/deployment.yaml
kubectl rollout status deployment.apps/hello-deployment
kubectl rollout history deployment.apps/hello-deployment
kubectl edit deployment hello-deployment
kubectl rollout undo deployment.apps/hello-deployment