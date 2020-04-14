docker_build('codeforcharlottesville/housinghub-api', './backend', dockerfile='./backend/Dockerfile',
  live_update=[
    sync('./backend', '/usr/housinghub'),
    run('pip install -r requirements.txt'),
    restart_container(),
  ]
)

docker_build('codeforcharlottesville/housinghub', './frontend', dockerfile='./frontend/Dockerfile',
  live_update=[
    sync('./frontend', '/usr/housinghub')
  ]
)

docker_compose('docker-compose.yaml')