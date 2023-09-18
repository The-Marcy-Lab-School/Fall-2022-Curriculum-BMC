# Express

The [Express](https://expressjs.com/) package is a popular and widely used Node.js web application framework. It simplifies the process of building web applications and APIs by providing features for
* creating and configuring web servers
* handling HTTP requests and responses
* managing routes
* managing middleware

To install Express in your Node.js project, you can use the following command with the npm package manager:

```
npm install express
```

After installing, you can use Express in your project by requiring it and creating an instance of the Express app:


```js
// Import express
const express = require('express');

// Create an express server object
const server = express();

/////////////////////////////////
//////// ROUTES ////////////////
///////////////////////////////

/*
Route components
- method (get, post, put, delete)
- path name ('/', '/about', '/health')
- handler: (req, res) => {}
*/

server.get('/', (req, res) => {
  res.send('Hi'); // Send back plain text
});

server.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>') // Send back HTML
})

server.get('/health', (req, res) => {
  res.send({ status: 'OK', name: 'Ben' }); // Send back JSON
});


// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
```

Adding routes is easy. Each HTTP verb has a corresponding method avaialable on the `app` returned by `express()`:
* `app.get(path, callback)`
* `app.post(path, callback)`
* `app.put(path, callback)`
* `app.patch(path, callback)`
* `app.delete(path, callback)`

## Wildcard Route

`*` serves as the _wildcard route_ which will catch any requests that doesn't match any of hte previously defined routes.

It is typically used as a fallback route to handle requests for non-existent or undefined routes, providing a custom error message or rendering a 404 Not Found page.

```js
app.get('*', (req, res) => { // The wildcard GET path will catch all other GET requests
  res.status(404).send({ msg: '404 Not Found' });
});
```

## Middleware

Midleware is an important concept in Express (and in many other frameworks!). A piece of middleware intercepts the `req` and `res` objects before they get to our route handlers, allowing us to make any modifications, or log any information we need, before performing routing.

This example shows a common use of middleware - logging request information. We want to do this for EVERY request that comes in, regardless of the HTTP method or the path:

```js
app.use((req, res, next) => {
    console.log('Request received!');
    next(); // REQUIRED: Invoke the next step in the response stack
});

app.use((req, res, next) => {
    const time = (new Date()).toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // REQUIRED: Invoke the next step in the response stack
});

/* Example Messages Printed To The Console:
Request received!
GET: / - 4/6/2023, 10:46:32 AM
Request received!
GET: /about - 4/6/2023, 10:46:37 AM
Request received!
GET: /fellows - 4/6/2023, 10:47:08 AM
*/
```

## Fellows Model

The `Fellow` class represents a roster of fellows. A "model" is a term we use to refer to a class that models a real-world object.

This `Fellow` class uses `static` methods — methods that are called directly on the `Fellow` class to access the private `#all` property.

It has the following static methods and properties:
- `#all` a private array holding the list of fellows
- `constructor()` creates an object with an `id` and `name` and adds it to the `#all` list
- `static list()` returns the `#all` list
- `static find(id)` returns the Fellow that matches the provided `id`
- `static editName(id, name)` updates the name of the Fellow that matches the provided `id`
- `static delete(id)` removes the Fellow that matches the provided `id`
- `static deleteAll()` removes all Fellows from `#all`

**Best Practice**
We're going to use the following middleware to ensure that the `Fellow` model is available in all request handlers on the `req` object. 

```js
app.use((req, res, next) => {
  req.Fellow = Fellow; // Best Practice: Take the global Fellow model and add it to the req object
  next();
});
```

## Read - `app.get`

```js
app.get('/fellows', (req, res) => {
  const fellowsList = req.Fellow.list();
  res.send(fellowsList); // Send back HTML
});
```

## Dynamic Params

Remember, REST APIs typically use URL paths that follow the pattern: `/collection/:id`

The `/:id` portion of the path is called a **route parameter**. In this example, we want to get the fellow with the id `2`. 

```
GET /fellows/2
```

In express, we can build **dynamic routes** that can grab the value of these route parameters from the `req.params` property.

```js
app.get('/fellows/:id', (req, res) => {
  const {
    Fellow,
    params: { id },
  } = req;
  const fellow = Fellow.find(Number(id));

  // if no fellow with that id exists, send a 404 and a message
  if (!fellow) return res.status(404).send(`No fellow with the id ${id}`);

  res.send(fellow);
});
```

## Create - `app.post`

We want the client to be able to add a fellow to the server's list of fellows through a `POST` request with a JSON `body` that looks like this: `{ fellowName: 'Ben' }`

This data can be found in `req.body`.

However, because the data coming in is JSON, we need to parse it first. The `express.json()` function is a built-in middleware function in Express. It parses incoming requests with JSON payloads. 

```js
app.use(express.json()); // Parses request body JSON

// More middleware...

app.post('/fellows', (req, res) => {
  const { Fellow, body } = req;
  const { fellowName } = body; // won't work without the middleware above!
  const newFellow = new Fellow(fellowName); // creates a fellow and adds it to the list
  res.send(newFellow);
});
```

## Update - `app.patch`

Update will use both `req.body` AND `req.params` to update the name of a specific

```js
app.patch('/fellows/:id', (req, res) => {
  const {
    Fellow,
    body: { fellowName },
    params: { id },
  } = req;
  /* 
  const { Fellow , body, params } = req;
  const { fellowName } = body;
  const { id } = params;
  */

  const updatedFellow = Fellow.editName(Number(id), fellowName);
  
  // sendStatus sends just the status with no message body
  if (!updatedFellow) return res.sendStatus(404);

  res.send(updatedFellow);
});
```

## Delete - `app.delete`

Delete only needs the dynamic `id` param to delete the correct fellow.

```js
app.delete('/fellows/:id', (req, res) => {
  const { Fellow, params: { id } } = req;
  const didDelete = Fellow.delete(Number(id));
  const statusCode = didDelete ? 204 : 404;
  res.sendStatus(statusCode);
});
```

## Serving Static Resources (HTML, CSS, JS)

If we want to serve a front-end to our client, we typically place those "public" resources in a separate `/public` folder The code below will serve that content when the user visits the home url `/`.

```js
const path = require('path');

// construct the path to the `/public` folder
const publicDir = path.join(__dirname, '..', 'public');

// serve static assets
const staticServer = express.static(publicDir);
app.use(staticServer);
```

## Best Practice - Separate the server logic

* Create and export the `app` from `server.js`
* Import the `app` from `server.js`
  * Set the port and host
  * Start listening

```js
const app = require('./server.js');

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
```


## The whole thing

```js
const express = require('express');
const path = require('path');
const Fellow = require('./model-fellow');

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

const app = express();
const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);

///////////////////////////////////
// Middleware
///////////////////////////////////
app.use(staticServer);
app.use(express.json());
app.use((req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
});

app.use((req, res, next) => {
  req.Fellow = Fellow;
  next();
});

///////////////////////////////////
// Routes
///////////////////////////////////
app.get('/fellows', (req, res) => {
  res.send(req.Fellow.list());
});

app.get('/fellows/:id', (req, res) => {
  const {
    Fellow,
    params: { id },
  } = req;
  const fellow = Fellow.find(Number(id));
  if (!fellow) return res.status(404).send(`No fellow with the id ${id}`);
  res.send(fellow);
});

app.post('/fellows', (req, res) => {
  const { 
    Fellow, 
    body: { fellowName } 
  } = req;
  const newFellow = new Fellow(fellowName);
  res.send(newFellow);
});

app.patch('/fellows/:id', (req, res) => {
  const {
    Fellow,
    body: { fellowName },
    params: { id },
  } = req;
  const updatedFellow = Fellow.editName(Number(id), fellowName);
  if (!updatedFellow) return res.sendStatus(404);

  res.send(updatedFellow);
});

app.delete('/fellows/:id', (req, res) => {
  const { Fellow, params: { id } } = req;
  const didDelete = Fellow.delete(Number(id));
  const statusCode = didDelete ? 204 : 404;
  res.sendStatus(statusCode);
});

app.get('*', (req, res) => { // The universal GET path will catch all other GET requests
  res.status(404).send({ msg: '404 Not Found' });
});

///////////////////////////////////
// Start the server
///////////////////////////////////
app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
```
