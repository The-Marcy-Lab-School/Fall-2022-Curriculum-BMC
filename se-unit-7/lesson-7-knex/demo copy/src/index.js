const knex = require('./db/knex.js');

const getPets = async () => {
    let query = await knex.raw("SELECT * FROM pets");
    console.log(query.rows);
};

// Use `` to create multi-line strings
const getPeople = async () => {
    let query = await knex.raw(`
      SELECT * 
      FROM people;
    `);
    console.log(query.rows);
};

const getPetsByOwnerIdAndSpecies = async(ownerId, species) => {
  let query = await knex.raw(`
    SELECT *
    FROM pets
    WHERE owner_id=? AND species=?
  `, [ownerId, species]);
  console.log(query.rows);
};

const getPetById = async(petId) => {
  let query = await knex.raw(`
    SELECT *
    FROM pets
    WHERE id=?
  `, [petId]);

  console.log(query.rows);
};

const getPersonById = async(personId) => {
  let query = await knex.raw(`
    SELECT *
    FROM people
    WHERE id=?
  `, [personId]);

  console.log(query.rows);
};

const createPet = async(name, species, ownerId) => {
  let query = await knex.raw(`
    INSERT INTO pets (name, species, owner_id)
    VALUES (?, ?, ?)
    RETURNING *
  `, [name, species, ownerId]);

  console.log(query.rows[0]);
};

const deletePetByName = async(name) => {
  let query = await knex.raw(`
    DELETE FROM pets
    WHERE name=?
    RETURNING *
  `, [name]);

  console.log(query.rows[0]);
};

const updatePetNameByName = async(oldName, newName) => {
  let query = await knex.raw(`
    UPDATE pets
    SET name=?
    WHERE name=?
    RETURNING *
  `, [newName, oldName]);

  console.log(query.rows[0]);
}

const main = async () => {
    await getPets() // Test to see if knex is configured correctly to connect to your database
    // await getPeople();
    await createPet('Pickles', 'cat', 3);
    await getPets() // Test to see if knex is configured correctly to connect to your database
    // await getPetsByOwnerIdAndSpecies(3, 'cat');
    await updatePetNameByName('Pickles', 'Wiggles');
    await getPets() // Test to see if knex is configured correctly to connect to your database
    await deletePetByName('Wiggles');
    await getPets() // Test to see if knex is configured correctly to connect to your database

    // await getPetById(3);
    // await getPersonById(3);
    knex.destroy(); // destroy the connection before ending the program.
};

main();