/* 
This router file handles all middleware and routes
related to books.
*/

const express = require('express');

// import middleware
const addBooks = require('./middleware/add-books');

// import route handlers
const {
  list,
  find,
  destroy,
  update,
  create,
  destroyAll
} = require('./controllers/books');

const router = express.Router();

router.use(addBooks);

// Put your routes here!
router.get('/', list);
router.get('/:id', find);
router.delete('/:id', destroy);
router.patch('/:id', update);
router.post('/', create);
router.delete('/', destroyAll);

module.exports = router;