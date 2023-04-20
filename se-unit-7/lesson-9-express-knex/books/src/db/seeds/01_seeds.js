/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { title: 'Learn to Git With It',	published_year: 2015 },
    { title: 'HTML for Dummies',	published_year: 2018 },
    { title: 'Advanced JavaScript',	published_year: 2009 },
    { title: 'Starting Express',	published_year: 2010 },
    { title: 'Node for Noobies',	published_year: 2020 }
  ]);
};

