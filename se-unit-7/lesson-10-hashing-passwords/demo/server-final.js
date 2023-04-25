const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const users = [];


const hashPassword = async (password, saltRounds = 8) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    return console.error(err.message);
  }
};
const isValidPassword = async (password, hash) => {
  try {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  } catch (err) {
    return console.error(err.message);
  }
};

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', async (req, res) => {
  const { body: { username, password } } = req;

  const hashedPassword = await hashPassword(password);
  
  if (!hashPassword) return res.status(404).send({msg: 'could not hash'});

  users.push({ username, hashedPassword });
  res.status(201).send()
});


app.post('/users/login', async (req, res) => {
  const { body: { username, password } } = req;

  const user = users.find(user => user.username === username);
  if (!user) return res.status(403).send({ msg: 'No user with that username found' });

  const isValid = await isValidPassword(password, user.hashedPassword);
  if (!isValid) return res.status(403).send({ msg: 'Wrong password' });
  res.send({ msg: 'Password Accepted!' });

});

app.listen(3000, () => {
  console.log(`Server listening on localhost:3000`)
})