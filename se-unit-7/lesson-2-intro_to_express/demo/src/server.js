/* eslint-disable no-shadow */
const path = require('path');
const express = require('express');
const Fellow = require('./model-fellow');

const app = express();
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

const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);
app.use(staticServer);

app.get('/fellows', (req, res) => {
  res.send(req.Fellow.list());
});

app.post('/fellows', (req, res) => {
  const { Fellow, body: { fellowName } } = req;
  const newFellow = new Fellow(fellowName);
  res.status(201).json(newFellow);
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

module.exports = app;
