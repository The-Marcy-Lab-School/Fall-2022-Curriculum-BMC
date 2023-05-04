/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('photos', (table) => {
  table.increments('id').primary();
  table.string('url').notNullable();
  table.integer('user_id').notNullable(); // makes a column user_id
  table.foreign('user_id').references('id').inTable('users'); // makes user_id a foreign key
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('photos');
