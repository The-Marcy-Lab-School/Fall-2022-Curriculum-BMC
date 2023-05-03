const createUser = async (req, res) => {
  // 1. Parse the request
  const {
    session,
    db: { User },
    body: { username, password }, // data from the form
  } = req;

  // 2. Use the model's methods
  const user = await User.create(username, password);

  // 3. Send data back to the client
  session.userId = user.id;
  res.send(user);
};

module.exports = createUser;
