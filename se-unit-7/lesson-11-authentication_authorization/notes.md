# Auth

**Authentication** and **authorization** are two different concepts related to security and access control. 
* **Authentication** is the process of verifying the identity of a user or entity
* **Authorization** is the process of determining what resources or actions a user or entity is allowed to access or perform.

### Day 1: User Class
* using bcrypt
* making a hashed password
* saving it in the db
* Not exposing hashed password in API


### Day 2: Sessions

**Server Side**
* Create session
* Server remembers session
* Send sessionId to client in a cookie
* When logging out, destroy session

```js
const cookieParse = require('cookie-parser');
const sesion = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('../db/knex.js');

const sessionOpts = {
  store: new KnexSessionStore({ knex })
}
```
* `cookieParser`
* `sessions`
* `KnexSessionStore = require('connect-session-knex')(session)`

The `session` is put on our `req` by the Session middleware.

1. Client makes a create request
2. Server makes a session

**Client Side**
* Separate HTML pages
  * `login.html` - log in
  * `create.html` - register an account
  * `user.html` - user profile
  * `index.html` - see primary resources (posts, pictures, etc...)
* Before navigating away from `/login` or `/register`, save `sessionId` to `localStorage` (in React, use context)
* Client JavaScript can't modify the cookie, but we can see it in Chrome's Application > Cookies tab (`connect.sid`).

```js
// global.js

const saveUserToLocalStorage = (user) => {
  try {
    console.log('hi:', );
    return localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    return null;
  }
};

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

const fetchHandler = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) return null;
  return (response.status === 204) || response.json();
};

const getPostOptions = (body) => ({
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getPostOptions(Object.fromEntries(formData.entries()));
  const response = await fetchHandler(url, options);
  if (!response) {
    form.reset();
    return alert('Something went wrong');
  }
  saveUserToLocalStorage(response);
  window.location.assign('/user.html');
};

const setNav = () => {
  const loggedOutNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./create.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./user.html">Profile</a></li>
  </ul>`;

  const navHtml = isUserLoggedIn() ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};
```

What to do with Auth