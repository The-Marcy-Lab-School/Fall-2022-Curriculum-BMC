// Barrel File
const list = require('./list');
const find = require('./find');
const destroy = require('./destroy');
const update = require('./update');
const create = require('./create');
const destroyAll = require('./destroy-all');

module.exports = {
  list, find, destroy, update, create, destroyAll
}