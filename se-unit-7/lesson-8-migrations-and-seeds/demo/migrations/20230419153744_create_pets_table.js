/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('pets', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('species').notNullable();
      table.integer('owner_id').notNullable();
      table.foreign('owner_id').references('id').inTable('users');
  });
 };
 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('pets');
 };