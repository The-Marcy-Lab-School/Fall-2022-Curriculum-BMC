const Book = require('../db/models/books');

const addBooks = (req, res, next) => {
  console.log("adding Book to the request");
  req.Book = Book;
  next();
}

module.exports = addBooks;