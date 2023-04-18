const { create } = require('domain');
const knex = require('./db/knex');

const getPets = async () => {
  const result = await knex.raw("SELECT * FROM pets");
  console.log(result.rows);
}

const getPeople = async () => {
  const result = await knex.raw(`
    SELECT *
    FROM people
  `);

  // const result = await knex('people').select('*');

  console.log(result.rows)
}

const BADgetPetBySpeciesAndOwnerId = async (species, ownerId) => {
  const result = await knex.raw(`
    SELECT name
    FROM pets
    WHERE species='${species}' 
  `); // DON'T DO THIS

  console.log(result.rows[0])
}

const getPetBySpeciesAndOwnerId = async (species, ownerId) => {
  const result = await knex.raw(`
    SELECT name
    FROM pets
    WHERE species=? AND owner_id=?
  `, [species, ownerId]);

  console.log(result.rows[0])
}

const createPet = async (species, name, ownerId) => {
  try {
    const result = await knex.raw(`
      INSERT INTO pets (species, name, owner_id)
      VALUES (?, ?, ?)
      RETURNING *
    `, [species, name, ownerId]);
    
    console.log(result.rows)
  } 
  catch (error) {
    console.log(error);
  }
}

const updatePetName = async (oldName, newName) => {
  const result = await knex.raw(`
    UPDATE pets 
    SET name = ? 
    WHERE name = ?
    RETURNING *;
  `, [newName, oldName]);

  console.log(result.rows)
}

const deletePetById = async (petId) => {
  const result = await knex.raw(`
    DELETE FROM pets 
    WHERE id = ?
    RETURNING *;
  `, [petId]);

  console.log(result.rows)
}

const main = async() => {
  
  await getPets();
  await createPet('cat', 'Pickles', 3);
  // await updatePetName('Jack', 'Carl');
  // await deletePetById(10)
  // await deletePetById(11)
  // await deletePetById(12)
  await getPets();
  // await getPeople();
  // await getPetBySpeciesAndOwnerId('cat', 2);
  // await getPetBySpeciesAndOwnerId('cat', 3);
  // await BADgetPetBySpeciesAndOwnerId("cat'; DROP TABLE people; --");

  knex.destroy();
}

main();