const express = require('express');
const addBook = require('./middleware/add-book');
const { list, find, destroy, destroyAll, update, create } = require('./controllers/to-do');

const router = express.Router();

router.use(addBook);

router.get('/books', list);
router.get('/books/:id', find);
router.delete('/books/:id', destroy);
router.patch('/books/:id', update);
router.post('/books', create);
router.delete('/books', destroyAll);

module.exports = router;