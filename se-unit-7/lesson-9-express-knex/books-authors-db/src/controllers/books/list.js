const list = async (req, res) => {
  const { Book } = req;
  const books = await Book.list();
  res.status(200).send(books);
};

module.exports = list;