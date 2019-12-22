#Resource Quotas

Create quotas and deploy service without quotas:

```
kubectl apply -f resourcequota.yml
kubectl apply -f deployment-without-quota.yml
```

Troubleshooting:

```
kubectl get pods
kubectl get deploy --namespace=myspace
kubectl get rs  --namespace=myspace
kubectl get describe rs/hello-deployment-85f47dfb7  --namespace=myspace
kubectl describe rs/hello-deployment-85f47dfb7  --namespace=myspace
```

Fix: 

```
kubectl delete deploy/hello-deployment-85f47dfb7  --namespace=myspace
kubectl delete deploy/hello-deployment  --namespace=myspace
kubectl get rs  --namespace=myspace
kubectl apply -f deployment-quota.1.yml
kubectl get rs  --namespace=myspace
```