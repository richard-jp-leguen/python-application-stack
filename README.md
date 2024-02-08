This is an example application with a frontend, a backend, and an "ingress" service which handles routing requests to either the frontend webapp or the backend flask application. All three can be run using `docker-compose`.

Of note: the FE has to be built on its own. The bundle will not be created by `docker-compose` but needs to be built using `npm run build`. See the README file in th `frontend` directory for more details.

Once the front-end bundle has been built, the application stack can be built using:

```
% docker-compose build
```

... and then run using:

```
% docker-compose up
```

The application then becomes available from http://localhost:80 in-browser.
