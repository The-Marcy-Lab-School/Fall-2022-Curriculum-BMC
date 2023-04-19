/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('pets').del()
  await knex('users').del()
 
  await knex('users').insert([
    {id: 1, first_name: 'Ann', last_name: 'Duong'},
    {id: 2, first_name: 'Maya', last_name: 'Bhattacharjee'},
    {id: 3, first_name: 'Reuben', last_name: 'Ogbonna'},
  ]);
 
  await knex('pets').insert([
    {id: 1, name: 'Zuko', species: 'dog', owner_id: 1},
    {id: 2, name: 'Appa', species: 'dog', owner_id: 1},
    {id: 3, name: 'Friday', species: 'cat', owner_id: 2},
    {id: 4, name: 'Khalo', species: 'dog', owner_id: 2},
    {id: 5, name: 'Juan Pablo', species: 'dog', owner_id: 3},
  ]);
 };