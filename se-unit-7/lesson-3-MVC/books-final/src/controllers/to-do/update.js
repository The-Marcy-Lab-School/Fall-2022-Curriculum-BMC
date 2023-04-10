const update = (req, res) => {
  const {
    Book,
    params: { id },
    body: { title },
  } = req;
  // const Book = req.Book
  // const id = req.params.id
  const bookToEdit = Book.editTitle(Number(id), title);
  if (!bookToEdit) return res.status(404).send('Not Found');

  res.send(bookToEdit);
};

module.exports = update;