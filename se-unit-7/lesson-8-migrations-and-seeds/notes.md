# Database Migrations and Seeds

[Knex Docs](http://knexjs.org)


# Why do we need them?

The main reason you want to use migrations and seeds is for **maintainability**.

Imagine this: you're working on a team of developers that share a code-base. You all push and pull from the same remote Github repo. Let's say you add a new feature that requires a database, so you create one on your local computer. You finish building out your feature and push your new code up! However, if your team members were to pull your code down, they would not get your database.


When working with other devs, they need to be able to reproduce your database structure and starting information. We could have everyone run the same SQL query to create the entire database manually on their computers. However, this does not scale, so in the real world it's much more common for companies to use actual migration files to keep track of their DB structure and seed files to populate their databases.


# What are Migrations?
Migrations are special files that run queries on your DB to perform structural updates, or in some cases, data updates. In node land, one of the more common ways to do this is by using the query builder KNEX. This is a simple library that allows you to create and run migrations files with ease.


## Rough overview of Knex
The docs are very nicely laid out but do use this project as an example when setting up your own. The first thing you'll need to do is create a node project `npm init -y`. Then, install knex so we can create our migrations and install pg so we can connect our node project to our Postgres database `npm install pg knex`.


For this tutorial, you'll need to create a Postgres database. Let's call this DB `my-database`.


Next, we can set up a knexfile.js. In the root of your directory, run `npx knex init` to create a boilerplate `knexfile.js`. Knex needs to manage the connection to your db, and this is where that is done.


```js
module.exports = {


 development: {
   client: 'sqlite3',
   connection: {
     filename: './dev.sqlite3'
   }
 },


 staging: {
   client: 'postgresql',
   connection: {
     database: 'my_db',
     user:     'username',
     password: 'password'
   },
   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },


 production: {
   client: 'postgresql',
   connection: {
     database: 'my_db',
     user:     'username',
     password: 'password'
   },
   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 }


};
```


You would have a different object to manage your connections for each environment, and each DB type will have its own specific format. For this tutorial, replace the development object with the following:


```js
module.exports = {


 development: {
   client: 'pg',
   connection: {
       host: 'localhost',
       port: 5432,
       user: 'postgres',
       password: '',
       database: 'my-database',
   },
 }


};
```
As you can see, we're using the `pg` library to connect. In addition, this tutorial assumes your Postgres is running on 127.0.0.1 (localhost) and port 5432. It also assume your Postgres user is called `postgres` and that that user has no password. If your Postgres is configured differently, you will need to make those changes in your `knexfile.js`.




## Creating New Migrations
Couldn't be easier! Let's say our development team is making an app that keeps track of user data. So we'll need to create a `users` table! Just run `npx knex migrate:make create_users_table` and you'll get something like: `20200518022705_create_users_table.js` located **in your new `/migrations` folder**. That bit at the front is a timecode that the migration uses to track what migrations have been run. Every time you want to create another migration: `npx knex migrate:make example_file`. You'll want to name your migration file based on what structural changes that migration will be doing. If we look in your new file we'll see:


```js
exports.up = function(knex) {


};


exports.down = function(knex) {


};


```
So there's an up and a down. What's that? Well, that's the beauty of migrations, you can move forward and back. When creating, it's the `up` function, when going back it's the `down`. You'll only likely need to use `down` in development. The important thing is that whatever you do in the `up` function must be undone in the `down` function:


```js
exports.up = (knex) => {
 return knex.schema.createTable('users', (table) => {
   table.increments('id').primary();
   table.string('first_name').notNullable();
   table.string('last_name').notNullable();
 });
};


exports.down = (knex) => {
 return knex.schema.dropTable('users');
};
```
So as we can see, we're creating a simple table in the `up` function, and then just dropping it in the down. When we decide to run our migration file, we will be creating a `users` table that has 4 columns: an `id` primary key, a `first_name`, and a `last_name`. If we decide to roll back (undo) our migration, we will simply drop the table we created. For more details, check the official Knex docs, but the syntax is pretty straightforward. 


To run your migrations do: `npx knex migrate:latest` and to roll back it's just: `npx knex migrate:rollback`. It's common to put these into your `package.json` as npm scripts.

At this point, if you view your `my-database` database, you'll see it has one table: `users`.

## What about Relationships Across Tables?


Let's say your development team wants to add a new feature where a user can have many pets. We'll need to create a new `pets` table which will need a foreign key that references the `users` table. Run `npx knex migrate:make create_pets_table` to create a new migration. Then in the new migration file, add the code:


```js
exports.up = (knex) => {
 return knex.schema.createTable('pets', (table) => {
     table.increments('id').primary();
     table.string('name').notNullable();
     table.string('species').notNullable();
     table.integer('owner_id').notNullable();
     table.foreign('owner_id').references('id').inTable('users');
 });
};


exports.down = (knex) => {
 return knex.schema.dropTable('pets');
};
```


Notice the line of code `table.foreign('owner_id').references('id').inTable('users');`


This is creating a foreign key reference. We will not be allowed to have a pet unless it has an owner that exists on the `users` table.


Run `npx knex migrate:latest` to apply these schema changes. If you view your `my-database` database, you'll see it has two tables: `users` and `pets`.




## Why do I need knex for migrations?
Technically you don't. But There's a reason companies use React instead of Vanilla js: there's no point in constantly reinventing the wheel. You *would* need to create a migration system, and it'd be a hell of a lot less battle-tested than Knex. So companies will likely use Knex or some other library with migration capabilities like an ORM like Sequelize.


So, if migrations build up our DB, how do we populate it?




# What is a seed file?
A seed file is the easiest way to fill your DB up with starter data. All a seed file really does is clear the database of all existing data and repopulate it with starter data. Again, you guys likely just added in data by hand to start, but there's a better way. Knex is a handy runner for your file because it will give you access. It also makes a file for you with `npx knex seed:make 01_seeds`, which would make `01_seeds.js` in the designated seed file (seeds are usually much fewer, so no timestamp is generated, you have to manually add the order you want things to run). To start, here's what that file would look like:


```js
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {colName: 'value', otherColName: 'value'},
    {colName: 'value', otherColName: 'value'},
    {colName: 'value', otherColName: 'value'}
  ]);
};
```
Basically, it's just telling you an example, you'll need to delete this. Also, feel free to make it `async` so you can use `await`. However, you don't have to use pure Knex. In the example file that I have provided, you'll notice that I do use `knex` to delete all data, but then I import my own models and use their methods to populate the database. This is a more common pattern.


Let's replace the file with:
```js
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
```

Finally, run `npx knex seed:run` to seed your database with some starter data. Check your database now and you should see your tables populated with some rows.

---

## Database Migrations & Seeds Summary

Database **seeding** and **migration** are both important concepts in managing a database.

**Database seeding** involves adding initial data to a database so that it has some content to work with when it is first created. 
* This can be useful when setting up a new database, as it can save time and effort when creating the initial content.

**Database migration** involves making changes to a database over time. 
* This can include adding new tables, updating existing data, or removing old data. 
* Migrations are typically used to keep a database up-to-date with changes to an application or system.
* Migrations ensure that the data within the database remains consistent and accurate.

In summary, seeding is about adding initial data to a database while migration is about managing changes to a database over time.

## Migration Example Scenarios

These example illustrate when migrations might be needed in real-world scenarios

#### New Feature

One example of when database migration might occur is when a software application is updated or a new feature is added that requires changes to the database schema. For instance, if an e-commerce website adds a new payment method, the database may need to be updated to include a new table for storing payment information. This change would require a database migration to ensure that the new table is created, any necessary data is migrated to the new table, and the application is able to access the new table and use the new payment method. In such cases, a migration tool would be used to apply the changes to the database schema and ensure that the data remains consistent and accurate.

#### Changing Infrastructure

Another example of when database migration might occur is when a company decides to change the structure of its database to better organize data and make it more efficient to query. For instance, if a company has been using a single large table to store all customer data and decides to split it into separate tables for customers, orders, and payments, this change would require a database migration. The migration process would involve creating new tables, updating existing tables, and moving data from the old table to the new tables in a way that preserves data integrity and consistency. This type of migration could improve database performance, simplify queries, and make it easier to maintain the database over time.

#### New Service

Another example of when database migration might occur is when a company decides to move its database to a new server or cloud-based platform. In this case, the migration process would involve exporting the data from the existing database, transferring it to the new server or platform, and then importing it into the new database. This could involve changes to the database schema, such as updating database connection settings or configuring security settings for the new server or platform. The migration process would need to be carefully planned and executed to ensure that the data remains intact and that there is no loss of data during the transfer. This type of migration is common when a company wants to take advantage of newer or more powerful hardware, or to move its data to a more secure or reliable platform.

#### Merging Database

Another example of when database migration might occur is when a company decides to merge two separate databases into a single unified database. This could occur when two companies merge or when a company acquires another company and needs to combine their databases. The migration process would involve extracting data from both databases, transforming it to ensure consistency and compatibility, and then loading it into the new database. This type of migration is complex and requires a detailed understanding of both databases and their data structures, as well as careful planning and execution to avoid data loss or corruption. The end result is a unified database that allows the company to access and manage all data in a single location.

## Migrations Commands

- `npx knex migrate:make <name>`
- `npx knex migrate:latest`
- `npx knex migrate:rollback`

### `npx knex migrate:make`

In `knexfile.js`, add a `migrations` section to determine where migration files are created

```js
migrations: {
  directory: path.join(__dirname, 'src', 'db', 'migrations')
}
```

`npx knex migrate:make <name>` will create two meta-tables:
* `knex_migrations`
* `knex_migrations_lock`
