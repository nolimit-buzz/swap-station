# Contabo Deployment Checklist

## Prerequisites
- Install Docker and Docker Compose on the Contabo server.
- Point your domain DNS A record to the server IP.
- Open ports 80 and 443 in the Contabo firewall and the OS firewall.

## Build and run
- Clone the repository onto the server.
- Run `docker compose up -d --build` from the project root.
- Confirm the app responds on `http://SERVER_IP:3000`.

## Reverse proxy
- Put Nginx or Caddy in front of the container for HTTPS.
- Forward port 80/443 to `localhost:3000`.
- Add SSL with Let’s Encrypt.

## Updates
- Pull the latest code.
- Run `docker compose up -d --build` again.
- Verify the container stays healthy with `docker compose ps`.

## Quick checks
- `docker logs swap-station`
- `docker compose ps`
- `curl http://localhost:3000`