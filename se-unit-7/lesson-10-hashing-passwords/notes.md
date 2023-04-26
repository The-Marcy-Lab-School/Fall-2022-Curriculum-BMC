# Hashing Passwords with Bcrypt

Key Concepts:
* Hashing
* Salting
* Salt Rounds
* Plaintext password vs. hashed password

## Basic Setup

* `npm init -y` (create the `package.json`)
* `npm i express bcrypt` (installs `express` and `bcrypt` node modules)
* `npm i -D nodemon` (installs `nodemon` as a dev dependency)
* `touch server.js` (create the `server.js` file)
* `"start": "nodemon ./server.js"` (define the `npm start` script)
* I'm going to use the REST Client VSCode extension to issue my HTTP requests (but you could also use Postman for this)

```js
// server.js
const express = require('express'); // import express
const app = express(); // create the express app
app.use(express.json()); // parse incoming req.body data as JSON

const users = []; // our "database"

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body; // { username, password }
  users.push(newUser);
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log(`Server listening on localhost:3000`)
})
```

**Problem:** we're storing all of the passwords in plain text. 
**Solution:** encode the passwords!

## Hashing

**Hashing** is a mathematical algorithm that transforms a string of characters into a fixed-length string of characters. 

The purpose of password hashing is to prevent attackers who obtain a database of user passwords from easily obtaining the passwords themselves. 
* Without password hashing, an attacker who obtains a user database can simply read the passwords in plain text. 
* With password hashing, the passwords are stored as **hash values**, and an attacker would need to spend significant time and resources attempting to crack the hash values back into the original passwords.

```js
const users = []; // our "database"

const hash = (pw) => {
  return someComplexAlgorithm(pw);
}

const createNewUser = (username, password) => {
  const hashedPassword = hash(password); // fjbkaiqifc

  // store the username + hashed password in the database
  users.push({ username, hashedPassword });
}

createNewUser('dogPerson123', 'ilovedogs')
```

When a user attempts to log in, their password is hashed again using the same hash function and the resulting hash value is compared to the stored hash value for that user. If the hash values match, the user is authenticated and allowed access.

```js
const hash = (pw) => {
  return someComplexAlgorithm(pw);
}

const createNewUser = (username, password) => {
  const hashedPassword = hash(password); // fjbkaiqifc

  // store the username + hashed password in the database
  users.push({ username, hashedPassword });
}

const loginUser = (username, inputPassword) => {
  // See if a user with the provided username exists
  const user = users.find(user => user.username === username);
  if (!user) { 
    console.log('User not found');
    return;
  }

  // If it does, hash the input password and compare it with the user's hashed password
  const hashedInputPassword = hash(inputPassword); // fjbkaiqifc
  console.log(user.hashedPassword === hashedInputPassword 
    ? `Welcome ${user.username}!`
    : `Wrong password for ${user.username}`);
}

createNewUser('dogPerson123', 'ilovedogs')

loginUser('dogPerson123', 'ilovedogs'); // Welcome dogPerson123!
loginUser('dogPerson123', 'ilovecats'); // Wrong password for dogPerson123.
loginUser('catPerson123', 'ilovecats'); // User not found
```

## Salting

A salt is a random string of data that is added to the input data before the hash function is applied. This changes the hash value that is produced, even for the same input data.

Even if two users have the same password, a new salt will be generated and added to the password, generating a unique hash each time. 

```js
const users = []; // our "database"

const hash = (pw) => someComplexAlgorithm(pw);
const getSalt = () => generateSomeRandomString();

const createNewUser = (username, password) => {
  const salt = getSalt(); // unique for every new user. eg. 'bkdh23'
  const hashedPassword = hash(salt + plainTextPassword);
  // hash('bkdh23' + 'ilovedogs')

  // store the username, hashed password, and the salt in the database
  users.push({ username, hashedPassword, salt });
}

const loginUser = (username, inputPassword) => {
  // See if a user with the provided username exists
  const user = users.find(user => user.username === username);
  if (!user) { 
    console.log('User not found');
    return;
  }

  // If it does, use the user's salt and hash the input password
  const hashedInputPassword = hash(user.salt + inputPassword);

  // if the hashed input matches the user's hashed password, it's a match!
  console.log(user.hashedPassword === hashedInputPassword 
    ? `Welcome ${user.username}!`
    : `Wrong password for ${user.username}`);
}

createNewUser('dogPerson123', 'ilovedogs')

loginUser('dogPerson123', 'ilovedogs'); // Welcome dogPerson123!
loginUser('dogPerson123', 'ilovecats'); // Wrong password for dogPerson123.
loginUser('catPerson123', 'ilovecats'); // User not found
```

Both the salt and the hashed password are stored. When a user signs back in, we can:
* find the user in the database with the provided username
* get the salt and apply it to the provided password to re-create the hashed password
* compare this hashed password to the saved hashed password

## Bcrypt

The `bcrypt` module does this all for us! It has two key methods:
* `bcrypt.hash(password, saltRounds)`
* `bcrypt.compare(password, hashedPassword)`

```js
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
```


A Full Express app with bcrypt can be seen below. 
To test it out, use Postman or the REST Client VSCode extension to:  
1. send a `GET /users` request to see that the `users` array is empty.
2. send a `POST /users` request to create a new user, sending along a `{ username, password }` object as the body
3. send a `GET /users` request to see your new user
4. send a `POST /users/login` request to log in as the existing user, sending along a `{ username, password }` object as the body. 

```js
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
```