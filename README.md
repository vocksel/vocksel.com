# vocksel.com

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
docker compose down
docker compose up -d
```
