const User = require('../db/models/user');
const Photo = require('../db/models/photo');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Photo,
  };
  next();
};

module.exports = addModels;
