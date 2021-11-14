FROM alpine:3.14

RUN apk add --update nodejs npm

RUN mkdir /opt/app

WORKDIR /opt/app

COPY package.json /opt/app

RUN /usr/bin/npm install --silent --progress=false

COPY . /opt/app

EXPOSE 3000:3000

CMD [ "node", "index.js" ]