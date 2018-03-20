FROM mhart/alpine-node:6.2.0

LABEL name "now-dockerfile-example"

RUN mkdir /app
WORKDIR /app
COPY package.json /my-app
RUN npm install
COPY index.js /my-app

EXPOSE 3000
CMD ["npm", "start"]