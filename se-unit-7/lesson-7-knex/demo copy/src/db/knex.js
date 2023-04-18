// src/db/knex.js
const env = 'development';
const knexConfig = require('../../knexfile')[env];
const knex = require('knex')(knexConfig);

module.exports = knex;