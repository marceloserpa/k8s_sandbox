# Configure RBAC

kubectl create namespace development

openssl genrsa -out development-eng.key 2048

openssl req -new -key development-eng.key -out development-eng.csr -subj "/CN=development-eng/O=teamA"

openssl x509 -req -in development-eng.csr -CA /home/marceloserpa/.minikube/ca.crt -CAkey /home/marceloserpa/.minikube/ca.key -CAcreateserial -out development-eng.crt -days 500

kubectl config set-credentials development-eng --client-certificate=/home/marceloserpa/.certs/development-eng.crt  --client-key=/home/marceloserpa/.certs/development-eng.key

kubectl config set-context development-eng-context --cluster=minikube --namespace=development --user=development-eng

kubectl --context=development-eng-context get pods # this command will failed because you not create role yet

kubectl create -f role-deployment-adm.yaml
kubectl create -f rolebinding-deployment-adm.yaml

kubectl --context=development-eng-context get pods
