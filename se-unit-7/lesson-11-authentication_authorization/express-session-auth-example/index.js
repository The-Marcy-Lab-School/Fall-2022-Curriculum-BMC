const express = require('express');
const sessions = require('express-session');
const server = express();

const oneDay = 1000 * 60 * 60 * 24;
const sessionOptions = {
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false 
};
app.use(sessions(sessionOptions));

server.get('/', (req, res)=> {
  res.send('hi');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})