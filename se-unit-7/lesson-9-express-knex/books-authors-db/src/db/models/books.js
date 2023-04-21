const { generateId } = require('../../utils');

const knex = require('./knex');

class Book {
  static #all = [
    // { id: 1, title: 'Learn to Git With It',	published_year: 2015 },
    // { id: 2, title: 'HTML for Dummies',	published_year: 2018 },
    // { id: 3, title: 'Advanced JavaScript',	published_year: 2009 },
    // { id: 4, title: 'Starting Express',	published_year: 2010 },
    // { id: 5, title: 'Node for Noobies',	published_year: 2020 }
  ];

  static async create({ title, published_year }) {
    try {
      const result = await knex.raw(`
        INSERT INTO books (title, published_year)
        VALUES (?, ?)
        RETURNING *;
      `, [title, published_year]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async showBookAndAuthors(bookId) {
    try {
      const result = await knex.raw(`
        SELECT *
        FROM books
        JOIN authors
          ON books.author_id = authors_id
        WHERE books.id=?
      `, [bookId]);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const result = await knex.raw(`
        SELECT *
        FROM books;
      `);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(bookId) {
    try {
      const result = await knex.raw(`
        SELECT *
        FROM books
        WHERE id=?
      `, [bookId]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async editTitle(id, newTitle) {
    try {
      const result = await knex.raw(`
        UPDATE books
        SET title=?
        WHERE id=?
        RETURNING *
      `, [newTitle, id]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(bookId) {
    try {
      const result = await knex.raw(`
        DELETE FROM books
        WHERE id=?
        RETURNING *
      `, [bookId]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      const result = await knex.raw(`
        TRUNCATE books
        RETURNING *
      `);
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

// const b1 = new Book('all about love');
// const b2 = new Book('Atomic Habits');
// const b3 = new Book('Between the world and me');

module.exports = Book;