FROM python:3.12-slim

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid $USER_GID $USERNAME \
  && useradd --uid $USER_UID --gid $USER_GID --shell /bin/bash --create-home $USERNAME 

WORKDIR /home/$USERNAME/app

USER $USERNAME

ENV VIRTUAL_ENV=/home/$USERNAME/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"


RUN \
  python3 -m pip install -U \
  --no-cache-dir \
  pip \
  && \
  python3 -m pip install -U \
  --no-cache-dir \
  setuptools wheel 
  
RUN \
  python3 -m pip install -U \
  --no-cache-dir \
  ruff 

COPY ./app/ .
CMD [ "python3", "main.py" ]

