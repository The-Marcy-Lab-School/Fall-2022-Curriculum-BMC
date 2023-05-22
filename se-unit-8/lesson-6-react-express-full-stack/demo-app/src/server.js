const express = require('express');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, '..', 'public');

app.use(express.static(publicDir))

app.use(express.json());

app.get('*', (req, res, next) => {
  if (req.url.includes('api')) {
    next();
  } else {
    res.sendFile(`${publicDir}/index.html`)
  }
})

app.get('/api/hello', (req, res) => {
  res.send({ msg: "hello world" });
})

module.exports = app;




