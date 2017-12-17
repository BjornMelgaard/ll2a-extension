docker run \
  --user node:users \
  -it \
  --rm \
  --name build-extension \
  -v "$PWD":/usr/src/app \
  -w /usr/src/app \
  node:9 \
  bash
