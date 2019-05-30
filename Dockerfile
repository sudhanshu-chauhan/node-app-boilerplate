FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN ["npm", "install"]

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

