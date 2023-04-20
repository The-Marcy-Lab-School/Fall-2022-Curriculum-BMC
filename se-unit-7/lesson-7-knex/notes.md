# Knex

TablePlus and `psql` in our terminal are great for testing out SQL statements.

[Knex](https://knexjs.org/) is a JavaScript query builder. It allows us to connect to our databases and use SQL queries within a Node project.

We will learn knex so that our Express APIs can access data from a persistent storage database.

### Setting up the Database

We'll be using [this SQL file](./demo/db.sql) called `db.sql` to seed our database. To follow along, create a new folder and then make your own copy of `db.sql` in that folder.

Take a look at the `db.sql` file. It contains the SQL commands to create and populate a database called `playground`. This database will have five tables: `people`, `pets`, `customers`, `orders`, `products`.

We can run these commands to set up our work (if working on windows, add `sudo -u postgres` before each command)
```
psql -c "DROP DATABASE playground;"
psql -c "CREATE DATABASE playground;"
psql -d playground -f db.sql
```
Alternatively, you can copy and paste the contents of `db.sql` and run in a SQL terminal or GUI like TablePlus. 


### Set Up Modules and Files

* `npm init -y`
* `npm i knex`
* `npm i pg`

### Create the Folder Structure

```
project/
  - src/
    - db/
      - knex.js
    - index.js
    - knexfile.js
```

* `mkdir src`
* `mkdir src/db`
* `touch src/db/knex.js`
* `touch src/index.js` 
* `knex init` - creates `knexfile.js`
  * Note: `knex init` will look for a global `knex` module. Use `npx knex init` to tell your terminal to look into the local `node_modules` folder after looking into the global modules.
  * Alternatively, install `knex` globally with `-g`

### What's in `knexfile.js`?

The `knexfile.js` holds configuration data for connecting to a database. It exports configuration objects that can be used for various **deployment environments**.

```js
// knexfile.js
module.exports = {
  development: {},  // Work in progress. Only on your computer
  staging: {},      // "Fake" production, fake data, fake users, test integrations
  production: {},   // Full production - real users
}
```

Each deployment environment needs a `client` and a `connection`. For now, we'll be working in the `development` environment and can ignore the other environment configurations.

```js
  development: {
    client: 'pg',
    connection: {
      database: 'db_name',
      user: 'username',
      password: 'password',
      host: 'localhost',
      port: 5432
    }
  },
```

### How to create a `knex` object to connect to the database

> ⚠️ NOTE: The `knexfile.js` file MUST be located in the root of your project. Otherwise, `knex` won't know where to find it.

To connect to the database specified by the `knexfile.js`, we need to create a `knex` object. 


```js
// src/db/knex.js
const env = 'development';
const knexConfig = require('../../knexfile')[env];
const knex = require('knex')(knexConfig);

module.exports = knex;
```
* The `knexfile.js` file exports an object with configurations for various deployment environments. We want the `development` configuration.
* The `knex` Node module exports a function to create a `knex` object. It takes in our `knexConfig` as an argument.
* The `knex` object is our connection to the database specified in `knexfile.js`. We can export it so that other files can use the `knex` connection object.

### Using the `knex` connection object

We can play with our `knex` connection directly in our `index.js` file. 

> 💡 NOTE: In future projects, only our `models` will interact with `knex`.

The `knex` connection object has an _asynchronous_ method called `raw` that takes in SQL statements and returns a `query` object.

```js
// src/index.js
const knex = require('./db/knex.js');

const getPets = async () => {
    let query = await knex.raw("SELECT * FROM pets");
    console.log(query);
};

const main = async () => {
    await getPets() // Test to see if knex is configured correctly to connect to your database

    knex.destroy(); // destroy the connection before ending the program.
};

main();
```

* Most of the time, we'll use the `query.rows` property to get the results as an array.

### Multi-Line Queries

```js
// Use `` to create multi-line strings
const getPeople = async () => {
    let query = await knex.raw(`
      SELECT * 
      FROM people;
    `);
    console.log(query.rows);
};
```

### Dynamic Queries

Consider the `pets` table below. 

**Q: What is the SQL query to find the cats owned by the owner with id 3?**

<details><summary>Answer</summary>

> ```sql
> SELECT *
> FROM pets
> WHERE owner_id=3 AND species='cat'
> ```

</details>

| id |  name |  species | owner_id |
| - | - | - | - |
| 1 | 	Khalo | 	dog |	3 |
| 2 | 	Juan Pablo |	dog	| 2 |
| 3 | 	Bora | 	bird |	1 |
| 4 | 	Tora | 	dog |	1 |
| 5 | 	Frida | 	cat |	3 |
| 6 | 	Pon Juablo |	cat	| 2 |
| 7 | 	Kora | 	cat |	1 |

How can we make a function that can show us the pets of ANY given `species` owned by ANY given `owner_id`?

Ex: `getPetsByOwnerIdAndSpecies(3, 'cat')`

We will need to create a **dynamic query** with `knex.raw`:
* insert `?` as a placeholder for a dynamic piece of data.
* pass an array of values as a second argument to the `knex.raw` function containing the dynamic values to be used. 

```js
const getPetsByOwnerIdAndSpecies = async(ownerId, species) => {
  let query = await knex.raw(`
    SELECT *
    FROM pets
    WHERE owner_id=? AND species=?
  `, [ownerId, species]);

  console.log(query.rows);
}
```

In this query, the first `?` will be replaced by the value of the `ownerId` parameter, and the second `?` will be replaced by the value of the `species` parameter.

### C(R)UD

So far, we've read from the database, let's create, update, and delete using `knex.raw`.

**Create a pet:**

```js
const createPet = async(name, species, ownerId) => {
  let query = await knex.raw(`
    INSERT INTO pets (name, species, owner_id)
    VALUES (?, ?, ?)
    RETURNING *
  `, [name, species, ownerId]);

  console.log(query.rows[0]);
};
```

* `RETURNING *` returns the created record. Without this, `query.rows` will be an empty array.
* `query.rows[0]` will the one created value.

**Update a pet's name:**

```js
const updatePetNameByName = async(oldName, newName) => {
  let query = await knex.raw(`
    UPDATE pets
    SET name=?
    WHERE name=?
    RETURNING *
  `, [newName, oldName]);

  console.log(query.rows[0]);
}
```

**Delete a pet:**

```js
const deletePetByName = async(name) => {
  let query = await knex.raw(`
    DELETE FROM pets
    WHERE name=?
    RETURNING *
  `, [name]);

  console.log(query.rows[0]);
};
```

### Challenges

Level 1: `pets` and `people`
* get one pet by pet id
* get one person by person id
* get pets owned by a person by owner_id
* get pets owned by a person by the owner's first and last name
* create a new pet
* delete a pet
* update an owner's name

Level 2: `customers`, `products`, and `orders`
* get all the orders the belong to certain customer.
* get all the products that a certain customer has ever bought.
* get the top 3 most recent orders.
* get the cheapest product.
* get all the customers that have ever bought a certain product.
* create a new order
* delete an order
* update an order

Level 3: `authors`, `books`, and `author_book`
* get all the books that a certain author has ever written.
* get all the authors of a certain book.
* create a new book, by a provided author (make sure to connect them!)
* update the title of a book
* delete a book (make sure to remove the associated connection as well)

