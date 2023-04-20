const find = async (req, res) => {
  const { Book, params: { id } } = req;
  // const Book = req.Book
  // const id = req.params.id
  const bookToFind = await Book.find(Number(id));
  if (!bookToFind) return res.status(404).send('Not Found');

  res.send(bookToFind);
}

module.exports = find;