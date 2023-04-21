const showBookAndAuthors = async (req, res) => {
  const { Book, params: { id } } = req;

  const bookAndAuthors = Book.showBookAndAuthors(Number(id))
  res.send(bookAndAuthors)
}

module.exports = showBookAndAuthors;