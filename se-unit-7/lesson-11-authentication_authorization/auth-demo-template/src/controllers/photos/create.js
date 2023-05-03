const create = (req, res) => {
  const { body: { url } } = req;
  console.log(`add ${url} to database`);
  res.send(`${url} received!`);
};

module.exports = create;
