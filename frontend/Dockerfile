# syntax=docker/dockerfile:1

FROM node:21

EXPOSE 3000

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD ["node", "server.js"]
