## Kubeless

Configure Kubeless 
```
wget https://github.com/kubeless/kubeless/releases/download/v1.0.4/kubeless_linux-amd64.zip
unzip kubeless_linux-amd64.zip
sudo mv bundles/kubeless_linux-amd64/kubeless /usr/local/bin/
```


Deploy kubeless on kubernetes
```
kubectl create ns kubeless
kubectl create -f kubeless-v1.0.4.yaml 
```

Deploy function on kubernetes
```
kubeless function deploy hello --runtime python2.7 \
                                --from-file test.py \
                                --handler test.hello
```

List
```
kubectl get functions
```

Calling kubeless function
```
kubeless function call hello --data 'Hello world!'                                
```



Clean up

```
kubeless function delete hello
kubectl delete -f kubeless-v1.0.4.yaml 
```