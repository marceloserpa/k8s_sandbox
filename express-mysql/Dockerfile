FROM node:19-alpine3.16

COPY package.json /

RUN npm install --silent --progress=false

COPY . /

EXPOSE 3000:3000

CMD [ "node", "index.js" ]