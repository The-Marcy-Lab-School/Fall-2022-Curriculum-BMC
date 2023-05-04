const bcrypt = require('bcrypt');

const isValidPassword = async (password, hash) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (err) {
    return console.error(err.message);
  }
};

const hashPassword = async (password, saltRounds = 8) => {
  try {
    return bcrypt.hash(password, saltRounds);
  } catch (err) {
    return console.error(err.message);
  }
};

const tester = async (plainTextPassword, saltRounds = 8, shouldMatch = true) => {
  const hashedPassword = await hashPassword(plainTextPassword, saltRounds);
  const [algorithm, cost, body] = hashedPassword.split('$').slice(1);
  const salt = body.slice(0, 22);
  const hash = body.slice(22);

  console.log('------------------------------------');
  console.log('algorithm:', algorithm);
  console.log('cost:', cost);
  console.log('Salt (22 chars):', salt, salt.length);
  console.log('Hash (31 chars):', hash, hash.length);

  shouldMatch
    ? console.log('Good password:', await isValidPassword(plainTextPassword, hashedPassword))
    : console.log('Bad password:', await isValidPassword(`${plainTextPassword}nope`, hashedPassword));
};

tester('password');
tester('password', 5);
tester('broken', 10, false);

// For more info, see:
// https://blog.logrocket.com/password-hashing-node-js-bcrypt
