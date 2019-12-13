FROM node:10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

# Install app dependencies
COPY package.json /src/app/
RUN npm install

# Bundle app source
COPY . /src/app

RUN apk update && apk add bash coreutils
RUN npm run build
#&& npm run db-seed

EXPOSE 3001

# ENTRYPOINT [ "executable" ]
# CMD [ "./wait-for-it.sh", "localhost:3306", "--strict", "npm", "start" ]

# How to run this:
# In terminal, cd to this directory (reviews-service)
# Build the image: `docker build -t reviews-service .`
# Run `docker images` to check and see if the image is there.
# `docker run -d -p 3001:3001 --rm reviews-service`
# Should show up when you run `docker ps`
# Visit localhost:3001 to see it in browser