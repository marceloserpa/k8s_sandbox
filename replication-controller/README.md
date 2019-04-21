# Replication-Controller


```
 kubectl create -f replication-controller.yml
 kubectl get pods
 kubectl delete pod dockerhub-hello.example.com-dfdz2
 kubectl get pods
 kubectl scale --replicas=3 -f replication-controller/replication-controller.yml
 kubectl get pods
 kubectl get rc
 kubectl scale --replicas=1 rc/dockerhub-hello.example.com
 kubectl get pods
 kubectl get rc
 kubectl delete rc/dockerhub-hello.example.com
 kubectl get pods
```
