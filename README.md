# node-express-docker-app

User REST API

## Authors

- [@Abhishek Adhikari](https://github.com/Ad-Abhishek)

## Create a Dockerfile at root location- contains instructions to create docker image

  FROM node:16.17.0-alpine
  WORKDIR /app
  ADD package*.json ./
  RUN npm install
  ADD index.js ./
  CMD ["node", "index.js"]



## Bulid docker image using the Dockerfile

 `$ docker build -t docker-demo .` 



## List docker image

 `$ docker images`



## Run your docker image in a container

 `$ docker run --name my-docker-container -p 3000:3000 docker-demo` 



## login to docker hub

 `$ docker login`



## link local image to docker hub

 `$ docker tag <local-docer-image> <username>/<repo-name>`



## push to docker hub

 `$ docker push <username>/<repo-name>:<tag name>`



## docker log out

  `$ docker logout`