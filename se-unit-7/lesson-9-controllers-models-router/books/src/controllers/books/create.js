const create = async (req, res) => {
  // extracting data from the request object
  const { Book, body } = req;
  const { title, publishYear } = body;
  // const Book = req.Book;
  // const body = req.body;
  // const title = body.title;
  const newBook = await Book.create(title, publishYear); // adding data to the model
  res.status(201).send(newBook); // sending data back
}

module.exports = create;