const Book = require('../models/books');

const addBook = (req, res, next) => {
  req.Book = Book;
  next();
}

module.exports = addBook;