const express = require('express');
const path = require('path');

const app = express();

// middleware
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));
app.use(express.json());

// routes
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next(); // send the request along
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/hello', (req, res) => {
  res.send({ msg: "hello world!!!" });
})


module.exports = app;




