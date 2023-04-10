const list = (req, res) => {
  const { Book } = req;
  res.status(200).send(Book.list());
};

module.exports = list;