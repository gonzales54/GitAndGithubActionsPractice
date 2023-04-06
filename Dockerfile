FROM node:18.15.0-slim

RUN npm i -g npm@latest

USER node

RUN npm i

WORKDIR /home/node/app