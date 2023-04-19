const knex = require('./knex');


class Book {

  static async create(title, publishedYear) {
    try {
      const result = await knex.raw(`
        INSERT INTO books (title, published_year)
        VALUES (?, ?)
        RETURNING *;
      `, [title, publishedYear]);
      return result.rows[0];
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
      console.log(result.rows);
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
        WHERE id=?;
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
        RETURNING *;
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
        WHERE id=?;
      `, bookId);
      return result.rowCount ? true : false;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      await knex.raw('TRUNCATE books');
      return true;
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
