## Node Affinity




```
microk8s.kubectl apply -f node-affinity/node-affinity.yml
```

run apply for this file will not works because there is no node labeled with env=dev
so you need to add dev=env label

```
microk8s.kubectl label node ubuntu env=dev
```

Wait a minute to see pods running : )