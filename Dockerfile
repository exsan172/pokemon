FROM --platform=amd64 node:16
WORKDIR /pokemon

COPY package*.json ./pokemon/
COPY . /qqplays/

RUN npm install
CMD ["npm", "start"]