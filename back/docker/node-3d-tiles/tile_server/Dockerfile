FROM node:lts-slim

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN npm install -g http-server

USER $USERNAME

WORKDIR /workspace/

