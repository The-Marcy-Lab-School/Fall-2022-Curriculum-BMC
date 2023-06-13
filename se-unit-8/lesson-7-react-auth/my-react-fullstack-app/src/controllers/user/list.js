const listUsers = async (req, res) => {
  const { User } = req.db;
  const users = await User.list();
  res.send(users);
};

module.exports = listUsers;
