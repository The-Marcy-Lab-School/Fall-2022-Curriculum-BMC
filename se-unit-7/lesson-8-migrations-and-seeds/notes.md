# Database Migrations & Seeds

* Seeds = filling tables
* Migrations = creating / modifying table architecture
* Data Migration = removing a `_` from all 50000 users

Database Migrations refer to programmatically managing the version-controlled, incremental and reversible changes to relational database schemas.
* `exports.up` and `exports.down`
* `migrate:latest` and `migrate:rollback`
* Rollbacks are SUPER important

Example: A banking company wants to add a new column to a particular table. Let's do that without breaking everything. If something goes wrong, we can roll back.

* Database seeding is populating a database with tables

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