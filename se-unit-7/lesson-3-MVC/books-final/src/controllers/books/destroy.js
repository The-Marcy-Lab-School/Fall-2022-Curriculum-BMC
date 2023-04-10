const destroy = (req, res) => {
  const { Book, params: { id } } = req;
  // const Book = req.Book
  // const id = req.params.id
  const didDelete = Book.delete(Number(id));
  if (!didDelete) return res.status(404).send('Not Found');

  res.sendStatus(204);
};

module.exports = destroy;