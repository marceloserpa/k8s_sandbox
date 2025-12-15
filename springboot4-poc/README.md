
eval $(minikube docker-env)

cd springboot-app
./bake-2.sh
cd ..

kubectl create secret generic test-db-secret --from-literal=username=marceloserpa --from-literal=password=123456

kubectl apply -f k8s/

minikube service springpoc-svcs --url 

curl http://{IP + PORT}/people






