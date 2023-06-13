# A React+Express with Auth Template

This repo can be used to start a React+Express project fully equipped with Auth for user creation and login.

**Table of Contents**

- [Setup](#setup)
- [Understanding the Code](#understanding-the-code)

## Setup

- Fork this template repo
- Copy the `.env.template` and name it `.env`
- Create a database called `react_auth_example` database (or update your new `.env` to whatever database you are using)
- Double check that the `.env` variables are all correct (username, password, database name)
- `npm run kickstart` (`npm run dev` or `npm start` afterwards). This will do the following commands all together:
  - `cd frontend && npm i && cd ..` - installs front end dependencies
  - `npm i` - installs all dependencies
  - `npm run migrate` - runs `knex migrate:latest` which will run the provided migration file (look in the `src/db/migrations` folder)
  - `npm run seed` - runs `knex seed:run` which will run the provided seed file (look in `src/db/seeds` folder)
  - `npm run start` - runs `node src/index.js`, starting your server.
- Then, open a new terminal and `cd` into `frontend`. Then run `npm run dev` to start your Vite development server.

The provided migration and seeds file will create a `users` table with `id`, `username`, and `password_hash` columns.

- For an overview of migrations and seeds, [check out these notes](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-7/lesson-8-migrations-and-seeds/notes.md).
- If you need to update these columns, consider looking into the [alterTable](https://knexjs.org/guide/schema-builder.html#altertable) Knex documentation.
- If creating a new table, look at the [createTable](https://knexjs.org/guide/schema-builder.html#createtable) documentation.

## Running your application

Run the `npm run dev` command from the root directory to start your Express server.

#### Rebuilding the static assets

The Express server is configured to serve static assets from the `public/` folder. Those static assets are the current **build** of the React frontend found in the `frontend/` folder. You can see the built version of the React frontend by going to the server's address: http://127.0.0.1:3000/

In order to update this built version of your React application, you will need to run the `npm run build` command _from the `frontend/` folder_.

#### Working with a dev server

If you would like to work on the frontend without having to constantly rebuild the project, start a Vite dev server by running the `npm run dev` command _from the `frontend/` folder_.

If you look in the `vite.config.js` file, you will see that we've already configured the dev server to proxy any reqeusts made to `/api` to the back-end server.

---

## Understanding the Code

### Backend API

The provided backend exposes the following API endpoints defined in `src/routes.js`:

| Method | Path       | Description                                        |
| ------ | ---------- | -------------------------------------------------- |
| GET    | /users     | Get the list of all users                          |
| GET    | /me        | Get the current logged in user based on the cookie |
| GET    | /users/:id | Get a specific user by id                          |
| POST   | /users     | Create a new user                                  |
| POST   | /login     | Log in to an existing user                         |
| PATCH  | /users/:id | Update the username of a specific user by id       |
| DELETE | /logout    | Log the current user out                           |

### Middleware

In `src/server.js` and in `src/routes.js`, various pieces of middleware are used. These pieces of middleware are either provided by `express` or are custom-made and found in the `src/middleware/` folder

**Express Middleware**

```js
app.use(express.json());
```

- We are telling Express to parse incoming data as JSON

```js
app.use(express.static(path.join(__dirname, "..", "public")));
```

- We are telling Express to serve static assets from the `public/` folder

```js
app.use("/api", routes);
```

- `routes` is the Router exported from `src/routes.js`. We are telling Express to send any requests starting with `/api` to that Router.

**Custom Middlware**

```js
app.use(handleCookieSessions);
```

- `handleCookieSessions` adds a `req.session` object to every `req` coming into the server. (see `src/middleware/handle-cookie-sessions`)

```js
Router.use(addModels);
```

- `addModels` adds a `req.db` property to all incoming requests. This is an object containing the models imported from the `db/models/` folder (see `src/middleware/add-model`)

```js
Router.patch("/users/:id", checkAuthentication, userController.update);
```

- `checkAuthentication` verifies that the current user is logged in before processing the request. (see `src/middleware/check-authentication`)
- Here, we specify middleware for a singular route. Only logged-in users should be able to hit this endpoint.

### Authentication & Authorization

- **authenticated** means "We have confirmed this person is who they say they are"

- **authorized** means "This person is who they say they are AND they are allowed to be here."

So if we just want a user to be logged into the site to show content, we just check if they're _authenticated_.

However, if they wanted to update their profile info, we'd need to make sure they were _authorized_ to do that (e.g. the profile they're updating is their own).

#### Cookies

In the context of computing and the internet, a **acookie** is a small text file that is sent by a website to your web browser and stored on your computer or mobile device.

**Cookies contain information about your preferences and interactions with the website**, such as login information, shopping cart contents, or browsing history.

When you visit the website again, the server retrieves the information from the cookie to personalize your experience and provide you with relevant content.

#### Storing User IDs on the Cookie for Authentication

In our application, we are using cookies to store the `userId` of the currently logged-in user on the `req.session` object. This will allow us to implement **authentication** (confirm that the user is logged in).

The flow of cookie data looks like this:

![](readme-img/cookies-session-userid-diagram.svg)

1. When a request comes in for signup/login, the server creates a cookie (the `handle-cookie-sessions` middleware does this for us). That cookie is an object called `session` that is added to each request `req`.
2. The model will store the user data in the database (or look it up for `/login`) and return back the user with it's unique `user.id`
3. When we get the `User` back from the model, we store the `user.id` in that cookie (`session.userId = user.id`)
4. Now, that cookie lives with every request made by that user (`req.session`) and the client can check if it is logged in using the `/api/me` endpoint (see below).

## /api/me

In order to keep source of truth simple, we're going to track who is logged in with that `GET /api/me` convention.

- Each time a page is loaded, we quickly hit `GET /api/me`.
- If there is a logged in user, we'll see that in the json.

The reason this route is used instead of `GET /api/users/:id` is two fold.

1. We don't know the user's `id` on load, so how could we know which `id` to provide in the URL?
2. `GET` REST routes are supposed to be **idempotent** (eye-dem-PO-tent) which means "don't change." `GET /api/me` will change depending on the auth cookie. So, this little example app also has a `GET /api/users/:id` route because `GET /api/me` is not a replacement for it. `GET /api/users:id` isn't used in the client yet but your projects might in the future if you ever want to find a particular user by id (or username)!

# Advice

## Do not trust the front end

Remember, **DO NOT TRUST THE FRONTEND**. Validate everything on the server. Just because you block a form in the GUI doesn't mean a nefarious actor couldn't just pop open a console and make a `fetch` request. Also, the frontend can be buggy and mistakes can happen.

## Be wary of errors

Given time constraints, this project is handling barely any errors. The model is very brittle right now, the server and sql errors should be handled like we've done before. We're also only handling the most basic of flows and errors on the client. Things like handling attempted recreations of users who already exist or even wrong passwords can be handled much more delicately.
