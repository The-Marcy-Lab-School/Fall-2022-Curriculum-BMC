const loginUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password },
  } = req;

  const user = await User.findByUsername(username);
  if (!user) return res.sendStatus(404);

  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);

  session.userId = user.id;
  res.send(user);
};

module.exports = loginUser;
