# Frontend

This is the source code for my personal website. It leverages Webpack and React to create a multi-page site with a portfolio featuring my most recent projects, along with info about me.

## Developing

Install [NodeJS](https://nodejs.org/en/) if you don't have it already. From there you'll need to install all the packages and start the dev server to get going.

```shell
$ npm install
$ npm start # Starts the dev server
```

## Deploying

Login to the droplet and pull latest changes

```sh
ssh me@vocksel.com
cd vocksel.com
git pull origin main
```

Adjust `docker-compose.yml` to use published image:

```diff
+ image: vocksel/vocksel.com:main
- build: ./frontend
```

Then restart the services:

```sh
docker compose up -d --build router website
```
