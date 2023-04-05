const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(`Incoming request at ${req.url}`)
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});