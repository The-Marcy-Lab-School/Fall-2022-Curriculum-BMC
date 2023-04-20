const destroy = async (req, res) => {
  const { Book, params: { id } } = req;
  // const Book = req.Book
  // const id = req.params.id
  console.log('destroying')
  const didDelete = await Book.delete(Number(id));
  if (!didDelete) return res.status(404).send(null);

  res.status(204).send(true);
};

module.exports = destroy;