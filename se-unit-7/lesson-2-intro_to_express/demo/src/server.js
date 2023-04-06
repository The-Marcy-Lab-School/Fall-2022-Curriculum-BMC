const express = require('express');
const Fellow = require('./model-fellow.js')
const path = require('path');

const app = express(); // Create the express server

const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);

////////////////////////
// Middleware
////////////////////////
app.use(staticServer); // Serve static public/ content
app.use(express.json()); // Parses request body JSON

app.use((req, res, next) => {
  req.Fellow = Fellow; // Best Practice: Take the global Fellow model and add it to the req object
  next();
});

app.use((req, res, next) => {
  const time = (new Date()).toLocaleString();
  req.time = time;
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // REQUIRED: Invoke the next step in the response stack
});

////////////////////////
// Routes
////////////////////////
app.get('/fellows', (req, res) => {
  const fellowsList = req.Fellow.list();
  res.send(fellowsList) // Send back HTML
});

app.get('/fellows/:id', (req, res) => {
  const {
    Fellow,
    params: { id },
  } = req;
  // const Fellow = req.Fellow;
  // const params = req.params;
  // const id = params.id;

  const fellow = Fellow.find(Number(id));

  // if no fellow with that id exists, send a 404 and a message
  if (!fellow) return res.status(404).send(`No fellow with the id ${id}`);

  res.send(fellow);
});

app.get('*', (req, res) => { // The wildcard GET path will catch all other GET requests
  res.status(404).send({ msg: '404 Not Found' });
});

app.post('/fellows', (req, res) => {
  const Fellow = req.Fellow;
  const body = req.body;
  const fellowName = body.fellowName;

  const newFellow = new Fellow(fellowName);
  res.send(newFellow);
})

app.patch('/fellows/:id', (req, res) => {
  const {
    Fellow,
    body: { fellowName },
    params: { id },
  } = req;

  const updatedFellow = Fellow.editName(Number(id), fellowName);
  
  // sendStatus sends just the status with no message body
  if (!updatedFellow) return res.sendStatus(404);

  res.send(updatedFellow);
});

app.delete('/fellows/:id', (req, res) => {
  const { Fellow, params: { id } } = req;
  const didDelete = Fellow.delete(Number(id));
  const statusCode = didDelete ? 204 : 404;
  res.sendStatus(statusCode);
});

////////////////////////
// Start the server
////////////////////////

module.exports = app;