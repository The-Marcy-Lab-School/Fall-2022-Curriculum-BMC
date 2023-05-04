const create = async (req, res) => {
  const {
    session,
    db: { Photo },
    body: { url },
  } = req;
  const photo = await Photo.create(url, session.userId);
  res.send(photo);
};

module.exports = create;
