# Housing Hub Frontend 

## Development

From the root directory of the project, start the local development environment by runing:

```bash
tilt up
```

After everything has started, create a new user in the DB by making a request to the DB:

```bash
curl -XPOST -H "content-type: application/json" -d '{"user_name" : "user@gmail.com", "password" : "password", "role" : "navigator", "is_admin": true}' http://localhost:8443/backend/auth/register
#response:
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODY3MTkyMTgsInVpZCI6IjUxYjBiNjU0LWI0OTItNDgxOC1iYmI3LTVhNzFmY2FiYmE3MCIsInJvbGUiOiJuYXZpZ2F0b3IifQ.Zn0LsAPNkXXkV2x5wgaZuHrMEnWXMqFNSGdoWdkFiDk"
}

```

Now go to the app's main page by opening http://localhost:8443 in your browser and use the above credentials to log in.

email: user@gmail.com
password: password

## How to format Code

```bash
npx prettier --tab-width 2 --write src/**/*.js
```
## Prod

### Build

From the root directory, run 

```bash
docker build . -t codeforcharlottesville/housinghub-ui -f frontend/Dockerfile-prod
```

### Configure

In the production environment, set `backend_outgoing_url` to the URL of the housing hub backend.