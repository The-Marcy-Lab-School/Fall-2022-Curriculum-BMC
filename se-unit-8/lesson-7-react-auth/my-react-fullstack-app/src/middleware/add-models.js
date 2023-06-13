const User = require('../db/models/user');

const addModels = (req, res, next) => {
  req.db = {
    User,
  };
  next();
};

module.exports = addModels;
