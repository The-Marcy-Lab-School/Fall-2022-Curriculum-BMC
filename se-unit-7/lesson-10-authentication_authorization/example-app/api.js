const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("./users");

// only apply this middleware to our api routes
router.use(express.json());

// function to generate a jwy
async function generateJwt(user) {
  // This is typically a randomly generated string
  // This should be kept secret
  const secretKey = "notverysecretorsecure";

  const token = await jwt.sign(
    {
      userId: user.id,
    },
    secretKey
  );
  console.log(token);
  return token;
}

// This middleware only runs on this router
router.use((req, res, next) => {
  console.log("api router");
  next();
});

// we can use middleware to authenticate requests
// instead of having to redefine this logic in each route
// handler
const authenticate = async function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Bearer Token
  const token = req.headers.authorization.split(" ")[1];

  let decoded;

  try {
    decoded = await jwt.verify(token, secretKey);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  if (decoded) {
    request.userId = decoded.userId;
    next();
  }
};

// this is here purely to demonstrate how to
// generate a jwt
// user is hardcoded here as an example but we typically
// will pass in the user from a db call
router.get("/jwt", async (req, res) => {
  const user = { id: Math.floor(Math.random() * 10) };
  const token = await generateJwt(user);

  res.json({
    id: 1,
    jwt: token,
  });
});

// this route is used to generate a token that
// we can use on subsequent calls to show we are
// authorized
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      message: "No user found with that email",
    });
  }

  let match;

  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  let jwt;

  try {
    jwt = await generateJwt(user);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  res.json({ jwt });
});

router.get("/users", authenticate, async (req, res) => {
  // comes from out authenticate middleware
  console.log(req.userId);

  // if (!req.headers.authorization) {
  //   return res.status(401).json({
  //     message: "Unauthorized",
  //   });
  // }

  // // Bearer Token
  // const token = req.headers.authorization.split(" ")[1];

  // console.log("token", token);
  // let decoded;

  // try {
  //   decoded = await jwt.verify(token, secretKey);
  //   console.log(decoded);
  // } catch (err) {
  //   return res.status(500).json({
  //     message: err.message,
  //   });
  // }

  // if (decoded) {
  // return res.json({
  //   data: users,
  // });
  // }
  return res.json({
    data: users,
  });
});

router.get("/task", (req, res) => {
  res.json({
    data: [],
  });
});
module.exports = router;
