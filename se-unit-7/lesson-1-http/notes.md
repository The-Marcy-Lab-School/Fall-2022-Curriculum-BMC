# HTTP Server

`nodemon` makes `npm start` restart the server when there is a file change

```
npm i -g nodemon
```

## Built-In Packages (Don't need to install)

`http` package for creating an HTTP server
`url` package for parsing URLs

```js
const http = require('http');
const url = require('url');
const host = '127.0.0.1';
const port = 8000;

// This function will handle all incoming requests and generate responses
const requestListener = (req, res) => { 
    console.log(`incoming request at ${req.url}`);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Welcome to the home page</h1>");
    res.end();
}

// Create a server object with the provided handler
const server = http.createServer(requestListener);

// Start listening at the provided host:port
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
```

* Request Listener with `req` and `res` objects
    * `res.writeHead(200, headers)` to send status code and headers.
        * Content type is actually dynamically determined for you so you often don't need to include headers.
    * `res.write()` to send data. Can be called multiple times if needed.
    * `end()` to confirm all data has been sent. It MUST be called.
* Server has to **listen** at a particular port
* Once the program starts running, it will continue to run and listen
    * Use <kbd>Ctrl+C</kbd> to end a Node process.

## Design Pattern: Routing / Route Handlers
* Request Listener that parses the request for the URL path and then delegates to a handler for different **routes**

```js
const http = require('http');
const url = require('url');

const port = 8000;
const host = '127.0.0.1';

//////////////////////////////////////
// Handlers
//////////////////////////////////////

const homeHandler = (req, res) => {
    res.writeHead(200);
    res.write("Welcome to the home page");
    res.end();
}

const helloHandler = (req, res) => {
    const parseQueryParams = true;
    const baseUrl = url.parse(req.url, parseQueryParams);
    console.log('baseUrl:', baseUrl);
    
    // We want the query object
    const { query } = baseUrl;
    console.log('query:', query);

    const { name } = query;
    const message = `Hello ${name || 'stranger'}!`;
    res.writeHead(201);
    res.write(message);
    res.end();
}

const errorHandler = (req, res) => {
    // we can chain these calls together
    res.writeHead(404).end('Page does not exist');
}

//////////////////////////////////////
// Delegates to handlers
//////////////////////////////////////
const requestListener = (req, res) => {
    
    console.log(`incoming request at ${req.url}`);
    // Parse the request url and parse the query params into an object
    const baseUrl = url.parse(req.url);
    console.log('baseUrl:', baseUrl);
    
    // We want the pathname 
    const { pathname } = baseUrl;
    console.log('pathname:', pathname);

    // Delegate to the appropriate route handler
    switch(pathname) {
        case '/':
            return homeHandler(req, res);
        case '/hello':
            return helloHandler(req, res);
        default:
            return errorHandler(req, res);
    }
}

//////////////////////////////////////
// Create the server and listen
//////////////////////////////////////
const server = http.createServer(requestListener);

server.listen(port, host, () => { 
    console.log(`Server is running on http://${host}:${port}`);
})
```

## Host & Ports

![](img/host-port.png)

Host is like our home address.

* `localhost` is a hostname that refers to the current device used to access it. 
* `localhost` is an alias for `127.0.0.1` which is the standard address used. 
* `localhost === 127.0.0.1`

Ports are the "front doors" of our application. (There are are a lot of doors!)

* `:8000` is considered as a different "door" from `:5500`

Which port should you use? It doesn't really matter, but here are some ones that our instructors like to use and some standards that are used:
* `8000` (What I use)
* `4321` (Mike's favorite because its fun)
* `3000` (What other people use)
* `5500` (What other other people use)
* `80` (Standard unencrypted HTTP port)
* `443` (Standard encrypted HTTPS port)

Just pick one that isn't being used! 

> How do you know which ones aren't being used? Your computer will likely tell you if one is currently in use — just use a different one (or kill the process that is currently using that port).