# Auth

1. User logs in with a login API call.
2. Server generates JWT Toekn and `refresh_token`
3. Server sets a `HttpOnly` cookie with `refresh_token`, `jwt_token` and `jwt_token_expiry` are returned back to the client as a JSON payload.
4. The `jwt_token` is stored in client memory
5. A countdown to a future silent refresh is started based on `jwt_token_expiry`

## JWT - What is it used for?

https://www.youtube.com/watch?v=7Q17ubqLfaM&ab_channel=WebDevSimplified

Authorization - making sure user that sends a request to the server is the same as the user that logged in during authentication.

Normal Flow
* User logs in with client (POST /user/login { email, password })
* Store User in `Session` in Server Memory
* Send `Session_ID` to client as Cookie
* Client sends future requests with `Session_ID` cookie
* Server gets the User from `Session` based on `Session_ID` and verifies them before sending the response

JWT Flow
* User logs in with client (POST /user/login { email, password })
* Server creates JWT for User. Encodes  and serialized JWT with a secret key. Server sends the JWT to the client.
* Client stores JWT as a cookie. Sends future requests with JWT
* Server can verify JWT and get User from JWT before sending back the response.

Difference:
* `Session_ID`, user information is stored on the server. The server needs to look up the user data based on the `Server_ID`
* JWT stores user information in the token which is stored on the client side. The server doesn't need to store any information about the client. This means the same JWT can be used across multiple servers too.


## How JWT Works

https://jwt.io/

* Header
* Payload
    * `sub`: id of user stored in the token
    * `iat`: "issued at" - when the token was created (useful if you want to expire token)
    * `eat`: "expired at"
* Verify Signature
    * How the server can verify that the JWT was not tampered with.
    * encodes header + encodes payload and hashed with a secret key stored on the server.


## Why JWT?


## How to Use JWT + BCrypt in Express


#### Important `bcrypt` Methods

```js
// Password hasher
const bcrypt = require("bcrypt");
// used purely for generating an id
const { randomBytes } = require("crypto");

// Registering: Hashing a password with bcrypt.hash
const password = 'ilovecats';
try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
} catch (err) { console.error(error) }

const user = {
    id: randomBytes(4).toString("hex"),
    email: 'batman@gmail.com',
    name: 'batman',
    password: hashedPassword,
};
await Users.registerUser(user);

// ... 

// Logging In: Checking a Password with bcrypt.compare
const userEnteredPassword = 'ilovedogs';
const userFromDB = await Users.findUserByEmail('batman@gmail.com');
try {
    match = await bcrypt.compare(password, user.password);
} catch (err) { console.error(error) }
console.log(match ? 'logged in!' : 'wrong password');
```


#### Important `jwt` Methods

```js
const jwt = require("jsonwebtoken");

// Generating a JWT

// This is typically a randomly generated string
// This should be kept secret
const secretKey = "notverysecretorsecure";

const token = await jwt.sign({ userId: user.id }, secretKey );
console.log(token);
```

#### Imports:

```js
const express = require("express");
// Sessions
const session = require("express-session");
// Password hasher
const bcrypt = require("bcrypt");
// used purely for generating an id
const { randomBytes } = require("crypto");
// JSON Web Token
const jwt = require("jsonwebtoken");
```

#### Setting Up Session Middleware

```js
// Adds a `session` object to the Request (`req.session`)
app.uses(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "verysecretsecret",
    name: "sessionId",
  })
);
```

`secret`  is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests. The secret itself should be not easily parsed by a human and would best be a random set of characters. A best practice may include:

The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
Periodic updates of the secret, while ensuring the previous secret is in the array.
Using a secret that cannot be guessed will reduce the ability to hijack a session to only guessing the session ID (as determined by the genid option).

Changing the secret value will invalidate all existing sessions. In order to rotate the secret without invalidating sessions, provide an array of secrets, with the new secret as first element of the array, and including previous secrets as the later elements.

#### Registering a New User

```js
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let hashedPassword;

  try {
    // hash our password
    const saltRounds = 10;
    hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (err) {
    return res.status(500).render("error", { error: err });
  }

  const user = {
    id: randomBytes(4).toString("hex"),
    email,
    name,
    password: hashedPassword,
  };

  console.log(user);

  // simulate saving to db
  // typically we would insert the user into our database
  await Users.RegisterUser(user);

  req.session.user = user;

  res.redirect("/home");
});
```

#### User Login Checking A Password (Serverside)

```js
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check DB for User by Email
  const user = await Users.findByEmail(email);

  if (!user) {
   return res.status(404).send({ message: err.message });
  }

  let match;

  // check password
  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }

  if (!match) {
    return res.status(404).send({ message: 'Invalid Credentials' });
  }

  // add user to our session which forces it to save and send a cookie with
  // session identifier
  req.session.user = user;

  res.redirect("/home");
});
```

#### A Home Page Using the Session to Verify The Current User

```js
app.get("/home", (req, res) => {
  // check if user is in session and if not then we know they aren't authenticated
  if (!req.session.user) {
    return res.status(401).redirect("/login");
  }

  // else send the response
  return res.send({ user: req.session.user });
});
```


Making a JWT (Serverside)

```js
// function to generate a jwy
async function generateJwt(user) {
  // This is typically a randomly generated string
  // This should be kept secret
  const secretKey = "NotVerySecretOrsSecureKey"
  const token = await jwt.sign(
    {
      userId: user.id,
    },
    secretKey
  );
  console.log(token);
  return token;
}
```