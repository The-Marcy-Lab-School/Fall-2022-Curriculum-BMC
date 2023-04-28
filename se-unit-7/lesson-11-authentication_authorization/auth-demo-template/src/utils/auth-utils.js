const bcrypt = require('bcrypt');

/** Take in a user password and return a hashed password, undefined if error
 * @param {string} password Plaintext password
 * @param {number} saltRounds How many salt rounds to use
 * @returns {Promise<string|undefined>} Hashed password
 */
const hashPassword = async (password, saltRounds = 8) => bcrypt
  .hash(password, saltRounds)
  .catch((err) => console.log(err.message));

/** Check if a given password matches a given hash, returns a bool, or undefined if error
 * @param {string} password Plaintext password
 * @param {string} hash Salted hash
 * @returns {Promise<true|false|undefined>} Bool of whether password matches hash
 */
const isValidPassword = async (password, hash) => bcrypt
  .compare(password, hash)
  .catch((err) => console.error(err.message));

const isAuthorized = (userId, session) => {
  if (!userId || !session || !session.userId) return false;
  return Number(userId) === Number(session.userId);
};

module.exports = {
  hashPassword,
  isValidPassword,
  isAuthorized,
};
