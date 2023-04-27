# Auth

**Authentication** and **authorization** are two different concepts related to security and access control. 
* **Authentication** is the process of verifying the identity of a user or entity
* **Authorization** is the process of determining what resources or actions a user or entity is allowed to access or perform.

Template is available, we aren't expected you to build this from scratch. We're not expecting you to fully understand the details of it. We are expecting you to understand the high-level picture.

## Cookies

In the context of computing and the internet, a cookie is a small text file that is sent by a website to your web browser and stored on your computer or mobile device. 

Cookies contain information about your preferences and interactions with the website, such as login information, shopping cart contents, or browsing history.

When you visit the website again, the server retrieves the information from the cookie to personalize your experience and provide you with relevant content.

> ⚠️ It's worth noting that while cookies are generally harmless and serve useful purposes, they can also be used for malicious purposes such as tracking your personal information or spreading malware.

### The cookie-session package

The `cookie-session` middleware module makes it incredibly easy to use cookies to store information about our user. 

```js
const cookieSession = require('cookie-session');

const Router = express.Router();

Router.use(cookieSession({
  secret: process.env.SESSION_SECRET,
}));
```

With this middleware, all incoming Request objects will have a `req.session` property. We can add whatever data we want to it!

> <details><summary>💡 Note about cookie lifetimes</summary>
> <br>
> By default, the cookie's lifetime is "session", which means until we close the browser. We like this for now! But in real life you'd set the cookie to expire, and implement an automatic re-auth flow (recreate the cookie right before it expires), but that's too much at this point.
>
> </details>

```js
Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});
```

### Storing User ids on the cookie

In our application, we are using cookies to store the `userId` of the currently logged-in user. This will allow us to implement **authentication** (confirm that the user is logged in).

The flow of cookie data looks like this:

![](img/cookies-diagram.svg)

### Routes

```js
// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);
  // checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);

// Delete
Router.delete('/users/logout', userController.logout);
```

### Client Side

* 4 pages
  * `/create` - register an account
  * `/` - see primary resources (posts, pictures, etc...)
  * `/user` - user profile with log out button
  * `login` - log in
* Key fetching methods:
  <details><summary>Create - <code>signupAndLoginHandle</code></summary>

    * sends a `POST /api/users` request when creating a new user on the `/create` page along with a `username` and `password` from the form.
    * sends a `POST /api/users/login` request when logging in on the `/login` page along with a `username` and `password` from the form.

  </details>

  <details><summary>Read - <code>fetchLoggedInUser</code></summary>

    * sends a `GET /api/me` request which returns a `user` if signed in (the cookie sent to the server has a session id), or `null` if not.
    * sent when hitting the `/` page. If a user is signed in, show the <kbd>Profile</kbd> button in the nav. If not, show the <kbd>Login</kbd> and <kbd>Sign Up</kbd> buttons
    * sent when hitting the `/create` and `/login` pages. If a user is signed in, redirects to `/user`.
    * sent when hitting the `/users` page. If a user is NOT signed in, redirects to `/login`. If a user IS signed it, it uses the returned `user` object to store the `user.id` on the <kbd>Update Username</kbd> form as a `data-user-id` attribute.

  </details>
  <details><summary>Update - <code>updateUsernameHandler</code></summary>

    * sends a `PATCH /api/users/:userId` request along with the updated username.
    * sent when a user presses the <kbd>Update Username</kbd> button from `/user`.
  </details>
  <details><summary>Delete - <code>logoutHandler</code></summary>

    * sends a `DELETE /api/users/logout` request which only returns an error if something went wrong.
    * sent when a user presses the <kbd>Log Out</kbd> button from `/user`.
  </details>
    

### Server Side

* `index.js`
  * imports and starts `server.js`
* `server.js` 
  * imports and uses `routes.js` on all routes
  * imports and uses `handleCookieSessions` middleware on all routes
  * uses `express.json()` middleware on all routes
  * uses `express.static()` middleware on all routes
* `routes.js`
  * imports `userController`
  * imports and uses `addModels` middleware on all routes
  * imports `checkAuthentication` middleware and uses it on `patch('/users/:id')` requests and `get('/logged-in-secret')`
  * defines CRUD routes 
* `src/middleware/handleCookieSessions`
* `src/middleware/check-authentication`
* `utils/auth-utils`

#### CRUD Flows
<details><summary> Creating a User on <code>/create</code></summary>

  * User enters username and password into the form and clicks <kbd>Create User</kdbd>
  * `POST /users` > server > router > `userController.create` > `User.create`
  * The model hashes the password and stores the username and hashed password in the DB
  * A `User` instance is made to nicely package the data (`userInstance.id` and `.username`) and provide methods for interacting directly with that `User` instance (`userInstance.update` and `.isValidPassword`).
  * The controller receives the instance, stores the `userId` on the `session`, and sends the `user` to the client.

</details>
<details><summary>Logging in on <code>/login</code></summary>

  * User enters username and password into the form and clicks <kbd>Log in!</kdbd>
  * `POST /users/login` > server > router > `userController.login` > `User.findByUsername`
  * The model returns the user with the matching username and returns a `User` instance
  * The controller called the `user.isValidPassword` method to verify the input password
  * A `User` instance is made to nicely package the data (`userInstance.id` and `.username`) and provide methods for interacting directly with that `User` instance (`userInstance.update` and `.isValidPassword`)
  * The controller receives the instance, stores the `userId` on the `session`, and sends the `user` to the client.

</details>

<details><summary>Verifying Logins at <code>/api/me</code></summary>

  * 

</details>

