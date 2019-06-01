# Labels and NodeSelector

```
kubectl get nodes --show-labels
kubectl create -f node-labelselector/nodeselector-deployment.yml
kubectl get nodes
kubectl get pods
kubectl describe pod hello-app.example.com-8479bc66c5-hsb7f
 
kubectl label nodes  minikube hardware=high-spec
kubectl get nodes --show-labels
 
kubectl describe pod hello-app.example.com-8479bc66c5-hsb7f

```
