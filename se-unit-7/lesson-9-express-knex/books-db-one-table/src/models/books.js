const { generateId } = require('../../utils');

class Book {
  static #all = [
    { id: 1, title: 'Learn to Git With It',	published_year: 2015 },
    { id: 2, title: 'HTML for Dummies',	published_year: 2018 },
    { id: 3, title: 'Advanced JavaScript',	published_year: 2009 },
    { id: 4, title: 'Starting Express',	published_year: 2010 },
    { id: 5, title: 'Node for Noobies',	published_year: 2020 }
  ];

  constructor({ title, published_year }) {
    this.id = generateId(); // generate a new id +1
    this.title = title;
    this.published_year = published_year;

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