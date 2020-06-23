# Housing Hub Frontend 

## Development

From the root directory of the project, start the local development environment by runing:

```bash
tilt up
```

After everything has started, create a new user in the DB by making a request to the DB:

```bash
curl -XPOST -H "content-type: application/json" -d '{"username" : "user@gmail.com", "password" : "password", "role" : "navigator", "is_admin": true}' http://localhost:8443/backend/auth/register
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

### Deployment

The HousingHub frontend is deployed as a static asset to AWS S3 using the [serverless-finch plugin](https://github.com/fernando-mc/serverless-finch).

Deploying the frontend requires the backend API to be deployed already. The build process below needs to pull API endpoints from the backend APIs CloudFormation stack. If the backend stack doesn't exist, it will fail.

The deployment proess is two steps:


1. Build the project into a production-optimized bundle:

```sh
npx sls client build --stage dev
```

Note here that the stage arg is important. At build time, the frontend must be configured with the correct API endpoints which are pulled from the backend APIs CloudFormation stack. If the stage is not specified correctly then the frontend will not be using the correct API endpoint.

2. Deploy the static bundle:

```sh
npx sls client deploy --stage dev
```

