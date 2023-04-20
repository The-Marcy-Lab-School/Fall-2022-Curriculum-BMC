/* 
This router file handles all middleware and routes
related to books.
*/
const express = require('express');
// import middleware
const addBooks = require('../middleware/add-books');
// import route handlers
const bookControllers = require('../controllers/books');

// Creating the router
const router = express.Router();

// Only /books endpoints will use this middleware
router.use(addBooks);

// All of these routes are relative to /books
router.get('/', bookControllers.list);
router.get('/:id', bookControllers.find);
router.delete('/:id', bookControllers.destroy);
router.patch('/:id', bookControllers.update);
router.post('/', bookControllers.create);
router.delete('/', bookControllers.destroyAll);

module.exports = router;