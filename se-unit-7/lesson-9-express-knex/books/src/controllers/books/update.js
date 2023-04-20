const update = async (req, res) => {
  const {
    Book,
    params: { id },
    body: { title },
  } = req;
  // const Book = req.Book
  // const id = req.params.id
  // const title = req.body.title
  const bookToEdit = await Book.editTitle(Number(id), title);
  if (!bookToEdit) return res.sendStatus(404);

  res.send(bookToEdit);
};

module.exports = update;