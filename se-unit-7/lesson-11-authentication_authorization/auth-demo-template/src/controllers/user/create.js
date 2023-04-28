const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password },
  } = req;

  const user = await User.create(username, password);
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
