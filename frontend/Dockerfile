FROM node:21-alpine

RUN npm install -g http-server

ADD ./dist /dist

EXPOSE  8080
CMD ["http-server", "--cors", "-p8080", "-c-1",  "/dist"]
