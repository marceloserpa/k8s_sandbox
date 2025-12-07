
eval $(minikube docker-env)

cd springboot-app
./bake-2.sh
cd ..

kubectl apply -f k8s/

minikube service springpoc-svcs --url 

curl http://{IP + PORT}/hello
