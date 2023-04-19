/* 
This router file handles all middleware and routes
related to books.
*/
const express = require('express');

// Creating the router
const router = express.Router();

// All of these routes are relative to /author
router.get('/', (req, res) => {
  res.send("Here are the authors");
});

router.get('/:id', (req, res) => {
  res.send("Here is one author");
});

module.exports = router;