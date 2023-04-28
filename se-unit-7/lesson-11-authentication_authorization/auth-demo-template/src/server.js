const express = require('express');
const path = require('path');
// const handleSessions = require('./middleware/handle-sessions');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const logRoutes = require('./middleware/log-routes');
const routes = require('./routes');

const app = express();

app.use(handleCookieSessions);
app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);

module.exports = app;
