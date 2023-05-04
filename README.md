This is the frontend component of a To-Do app for CSE4234. The associated backend component can be found at [https://github.com/dmcdo/cse-webapps-backend](https://github.com/dmcdo/cse-webapps-backend).

In order to tell this frontend where the backend is, you must specify the `REACT_APP_BACKEND_URL` environment variable, either in a .env file at the root project directory (parent directory of `src/`) or otherwise via your operating system,

Example .env file for a backend running on localhost:
```py
REACT_APP_BACKEND_URL="http://127.0.0.1:8000"
```

Use `npm start` to start the react app. 
