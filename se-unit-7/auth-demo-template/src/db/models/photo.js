const knex = require('../knex');
// const authUtils = require('../../utils/auth-utils');

class Photo {
  // static async getPhotosByUserId(user_id) {
  //   try {
  //     // const query = 'SELECT * FROM users WHERE id = ?';
  //     // const { rows: [user] } = await knex.raw(query, [id]);
  //     // return user ? new User(user) : null;
  //   } catch (err) {
  //     console.error(err);
  //     return null;
  //   }
  // }

  static async create(url, user_id) {
    try {
      const query = `INSERT INTO photos (url, user_id)
        VALUES (?, ?) RETURNING *`;
      const result = await knex.raw(query, [url, user_id]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

// const testModel = async () => {
//   const photoObj = await Photo.create('catphoto.png', 20);
//   console.log(photoObj);
// };

// testModel();

module.exports = Photo;
