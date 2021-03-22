FROM mdsn/gnsdevelopment:gsm
WORKDIR /home/docker/app
COPY --chown=docker:docker . /home/docker/app
ENV HOST 0.0.0.0
USER docker
RUN yarn install
RUN yarn build
CMD $RUN
