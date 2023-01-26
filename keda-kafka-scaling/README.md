# foo service



Install Kafka on Kubernetes using Strimzi

```
minikube start --memory=4096
kubectl create namespace kafka
kubectl create -f 'https://strimzi.io/install/latest?namespace=kafka' -n kafka
kubectl apply -f https://strimzi.io/examples/latest/kafka/kafka-persistent-single.yaml -n kafka 
kubectl wait kafka/my-cluster --for=condition=Ready --timeout=300s -n kafka 
```

Consumer

```
kubectl -n kafka run kafka-consumer -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic my-topic --from-beginning
```


Producer

```
kubectl -n kafka run kafka-producer -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-console-producer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic marcelo-topic
```

Install KEDA

```
kubectl apply -f https://github.com/kedacore/keda/releases/download/v2.7.1/keda-2.7.1.yaml
```



## create container for foo-service


```
docker build -t marceloserpa/foo-app:v3 .
docker run --network=host -it 92ffec9be608 
docker push marceloserpa/foo-app:v3
```



kubectl -n kafka run kafka-producer -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-console-producer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic keda_poc_1


kubectl -n kafka run kafka-consumer -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server my-cluster-kafka-bootstrap:9092 --topic marcelo-topic --from-beginning



kubectl -n kafka run kafka-test-pf -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-producer-perf-test.sh --topic keda_poc_1 --throughput 10000000 --num-records 50 --producer-props bootstrap.servers=my-cluster-kafka-bootstrap:9092 --record-size 1000
        
        
        
kubectl -n kafka run kafka-delete -ti --image=quay.io/strimzi/kafka:0.28.0-kafka-3.1.0 --rm=true --restart=Never -- bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic marcelo-topic-2




debugging Keda


kubectl logs -f $(kubectl get pod -l=app=keda-operator -o jsonpath='{.items[0].metadata.name}' -n keda) -n keda
