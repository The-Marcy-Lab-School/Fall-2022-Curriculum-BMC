/* 
This router file handles all middleware and routes
related to books.
*/

const express = require('express');

// import middleware
const addBooks = require('./middleware/add-books');

// import route handlers
const bookControllers = require('./controllers/books');

const router = express.Router();

router.use(addBooks);

// Put your routes here!
router.get('/', bookControllers.list);
router.get('/:id', bookControllers.find);
router.delete('/:id', bookControllers.destroy);
router.patch('/:id', bookControllers.update);
router.post('/', bookControllers.create);
router.delete('/', bookControllers.destroyAll);

module.exports = router;