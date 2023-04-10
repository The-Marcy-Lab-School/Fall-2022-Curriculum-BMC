const list = (req, res) => {
  console.log("listing the books")
  const { Book } = req;
  res.status(200).send(Book.list());
}

module.exports = list;