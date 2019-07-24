# Secrets

Deployments
```
kubectl create -f hello-secrets.yml
kubectl create -f hello-deployment.yml
```


```
kubectl exec [pod-name] -i -t -- cat /etc/creds/username
kubectl exec [pod-name] -i -t -- cat /etc/creds/password
```
