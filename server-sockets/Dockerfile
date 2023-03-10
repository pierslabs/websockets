
FROM node:alpine

RUN yarn global add nodemon 

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]