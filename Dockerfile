FROM node:16.17.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD index.js ./
CMD ["node", "index.js"]