const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[env];
module.exports = require('knex')(config);
