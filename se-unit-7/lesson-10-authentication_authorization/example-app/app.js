const express = require("express");
const exphbs = require("express-handlebars");
// Sessions
const session = require("express-session");
// Password hasher
const bcrypt = require("bcrypt");
// Api router
const api = require("./api");
// Our "database"
const users = require("./users");

// used purely for generating an id
const { randomBytes } = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

// handlebars templating engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Mount our api subrouter
app.use("/api", api);

// process forms data
app.use(express.urlencoded({ extended: true }));

// Configure session middleware
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "verysecretsecret",
    name: "sessionId",
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // simulate db call
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.render("login", {
      message: "No user found with that email",
    });
  }

  let match;

  // check password
  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.render("login", {
      message: err.message,
    });
  }

  if (!match) {
    return res.render("login", {
      message: "Invalid Credentials",
    });
  }

  // add user to our session which forces it to save and send a cookie with
  // session identifier
  req.session.user = user;

  res.redirect("/home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

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
  users.push(user);

  req.session.user = user;

  res.redirect("/home");
});

app.get("/home", (req, res) => {
  // check if user is in session and if not then we know they aren't authenticated
  if (!req.session.user) {
    return res.status(401).redirect("/login");
  }

  // else send the response
  return res.render("home", {
    user: req.session.user,
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy();

  res.redirect("/");
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
