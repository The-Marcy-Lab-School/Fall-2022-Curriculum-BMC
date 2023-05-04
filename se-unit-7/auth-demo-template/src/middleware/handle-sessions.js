// A session can be much bigger than what a cookie will allow.
// An alternative way of tracking user sessions is by saving them
// in the DB, and all the cookie has is an id to it. Once on the
// server, you would look up the session from the cookie,
// and load the actual user information.
// Once you understand cookie sessions, why not give this more complex setup a try?

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('../db/knex');

const Router = express.Router();

const sessionOpts = {
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  store: new KnexSessionStore({ knex }),
};

Router.use(cookieParser());
Router.use(session(sessionOpts));

module.exports = Router;

// TABLE MIGRATION
// If you wanted to use this you could add the following migration
// This can be automatically created by the knex session store
// However, we want to make sure it's generated with all the other tables

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = (knex) => knex.schema.createTable('sessions', (table) => {
//   table.string('sid').notNullable().primary();
//   table.json('sess').notNullable();
//   table.timestamp('expired').notNullable().index();
// });

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = (knex) => knex.schema.dropTable('sessions');

// LOGGING OUT
// Also, instead of logging out with `req.session = null;`
// You'll need to do `req.session.destroy();`
