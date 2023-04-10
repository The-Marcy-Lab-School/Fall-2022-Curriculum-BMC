const { generateId } = require('../utils');

class Book {
  static #all = [
    {
      title: 'all about love',
      id: 100
    },
    {
      title: 'Atomic Habits',
      id: 101
    },
  ];

  constructor(title) {
    this.id = generateId(); // generate a new id +1
    this.title = title;

    Book.#all.push(this);
  }

  static list() {
    return Book.#all;
  }

  static find(bookId) {
    return Book.#all.find(({ id }) => id === bookId);
  }

  static editTitle(id, newTitle) {
    const book = Book.find(id);
    if (!book) return null;
    book.title = newTitle;
    return book;
  }

  static delete(bookId) {
    const bookIdx = Book.#all.findIndex(({ id }) => id === bookId);
    if (bookIdx < 0) return null;

    Book.#all.splice(bookIdx, 1);
    return true;
  }

  static deleteAll() {
    if (!Book.#all.length) return null;

    Book.#all.length = 0;
    return Book.#all;
  }
}

// const b1 = new Book('all about love');
// const b2 = new Book('Atomic Habits');
// const b3 = new Book('Between the world and me');

module.exports = Book;
