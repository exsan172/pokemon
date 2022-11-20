FROM --platform=amd64 node:16
WORKDIR /pokemon

COPY package*.json ./pokemon/
COPY . /pokemon/
EXPOSE 3000

RUN npm install
RUN npm run build
CMD ["npm", "start"]