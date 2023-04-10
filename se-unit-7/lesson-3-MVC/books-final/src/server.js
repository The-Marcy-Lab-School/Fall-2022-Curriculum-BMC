/* eslint-disable no-shadow */
const path = require('path');
const express = require('express');
const router = require('./router');
const logRoutes = require('./middleware/log-routes');

// creating the express app server
const app = express();

// Setting up the /public/ folder to be served at / path
const publicDir = path.join(__dirname, '..', 'public');
console.log(`sending client files from ${publicDir}`);

// Middleware
app.use(express.static(publicDir));
app.use(express.json());
app.use(logRoutes);

// Put your routes here!
app.use(router);

// export the server to be used in index.js
module.exports = app;
