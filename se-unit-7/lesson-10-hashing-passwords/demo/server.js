const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const users = [
  // { username: 'benspector3', password: 'aslkdjfklsj'},
  // { username: 'dogPerson123', password: 'ilovepuppies'}
]; // our 'database'


const hashPassword = async (password, saltRounds = 8) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    return console.error(err.message);
  }
};
const isValidPassword = async (inputPassword, savedUserHashedPassword) => {
  try {
    const isValid = await bcrypt.compare(inputPassword, savedUserHashedPassword);
    return isValid;
  } catch (err) {
    return console.error(err.message);
  }
};


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html')
});

app.get('/users', (req, res) => {
  res.send(users);
});

// fetch('/users', {
//   method: 'POST',
//   headers: { 'Content-Type': "application/json"},
//   body: { username: 'catPerson', password: 'ilovecats' }
// })

app.post('/users', async (req, res) => {
  const { body: { username, password } } = req;
  const hashedPassword = await hashPassword(password)

  if (!hashedPassword) return res.status(404).send({ msg: 'could not hash'});
  
  const newUser = { username, hashedPassword }
  users.push(newUser);
  res.sendStatus(201);
});

app.post('/users/login', async (req, res) => {
  const { body: { username, password } } = req;

  const user = users.find(user => user.username === username);
  if (!user) return res.status(403).send({ msg: 'No user with that username found' });

  const isValid = await isValidPassword(password, user.hashedPassword);
  if (!isValid) return res.status(403).send({ msg: 'Wrong password' });
  res.send({ msg: 'Password Accepted!' });

});


app.listen(3000, 'localhost', () => {
  console.log(`Server listening on localhost:3000`)
})