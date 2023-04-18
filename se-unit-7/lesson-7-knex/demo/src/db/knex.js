// src/db/knex.js
// Set the deployment environment variable
const env = process.env.NODE_ENV || 'development';

// Grab the corresponding knex configuration object from knexfile.js
const knexConfig = require('../../knexfile')[env];

// Create the knex connection object using that config
const knex = require('knex')(knexConfig); 

module.exports = knex;