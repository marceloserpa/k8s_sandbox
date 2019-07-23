# Health checks POC

```
sudo docker login

sudo docker build . -t hello-deployment-app
sudo docker tag hello-deployment-app:latest marceloserpa/hello-deployment-app:v1.0.1
sudo docker push marceloserpa/hello-deployment-app:v1.0.1
```


```
 kubectl create -f hello-deployment.yml
```
