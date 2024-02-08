While running the BE on port `:7070`, use the following to run the FE for development:

```
$ npm run dev
```

Then open http://localhost:8080 in-browser. The webpack dev server has a proxy to the BE running on `:7070`.

--------

To build the FE as a docker image, first build the bundle:

```
% npm run build
```

... then build the docker image:

```
% docker build -t python-application-stack.frontend .
```

It's best to run the FE in a docker container using docker-compose, so it has a BE to communicate with - but if you really want to run it in a docker container:

```
% docker run -p 8080:8080 python-application-stack.frontend
```

