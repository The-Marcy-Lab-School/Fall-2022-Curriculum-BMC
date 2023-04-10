const Book = require('../models/books');

const addBooks = (req, res, next) => {
  req.Book = Book;
  next();
}

module.exports = addBooks;