# vocksel.com

All services for [vocksel.com](https://vocksel.com).

The [frontend](./frontend/) gets deployed to `vocksel.com` and `www.vocksel.com`. See [the README](./frontend/README.md) for more info.

All other services wind up on subdomains. See [Caddyfile](./Caddyfile) for mappings.

## Deploying

Login to the droplet and pull latest changes

```sh
ssh me@vocksel.com
cd vocksel.com
git pull origin main
sudo docker pull vocksel/vocksel.com:main
```

If this is the first deployment, make sure to install `loki-docker-driver`:

```sh
sudo docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
```

If deploying a new version of the frontend, adjust `~/vocksel.com/docker-compose.yml` to use the published image:

```diff
+ image: vocksel/vocksel.com:main
- build: ./frontend
```

Then deploy services:

```sh
sudo docker compose up -d
```
