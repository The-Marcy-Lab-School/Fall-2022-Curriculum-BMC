const express = require('express');
// const path = require('path');

const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
  console.log('request received!')
  res.send({ msg: "hello world!" })
})

app.listen(3000);