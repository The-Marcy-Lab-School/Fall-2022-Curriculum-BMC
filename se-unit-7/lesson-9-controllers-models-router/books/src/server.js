/* eslint-disable no-shadow */
const path = require('path');
const express = require('express');

const bookRoutes = require('./routers/book-routes');
const authorRoutes = require('./routers/author-routes');
const logRoutes = require('./middleware/log-routes');

// creating the express app server
const app = express();

// Setting up the /public/ folder to be served at / path
const publicDir = path.join(__dirname, '..', 'public');
console.log(`sending client files from ${publicDir}`);

// General Purpose Middleware
app.use(express.static(publicDir));
app.use(express.json());
app.use(logRoutes);

// Other routers we are using
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

// export the server to be used in index.js
module.exports = app;
