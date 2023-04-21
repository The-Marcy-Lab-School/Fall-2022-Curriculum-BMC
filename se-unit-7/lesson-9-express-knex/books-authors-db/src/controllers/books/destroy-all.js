const destoryAll = (req, res) => {
  const { Book } = req;
  const result = Book.deleteAll();
  if (!result) return res.sendStatus(404);

  res.sendStatus(204);
}

module.exports = destoryAll;