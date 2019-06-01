FROM node:8.15.1-alpine

COPY package.json /

RUN npm install --silent --progress=false

COPY . /

EXPOSE 9000:9000

CMD [ "node", "index.js" ]
