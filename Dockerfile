FROM node:20-slim

WORKDIR /app

COPY package*.json /app/

RUN npm i --force

COPY . .

CMD ["npm","start"]