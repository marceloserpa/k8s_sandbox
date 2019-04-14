FROM node:8.15.1-alpine

COPY package.json /

RUN npm install --silent --progress=false

COPY . /

EXPOSE 8080:8080

CMD [ "node", "index.js" ]
