FROM node:12

WORKDIR /usr/housinghub

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

CMD npm start