const pool = require("../../config/database.js");

module.exports = {
  createPost: (data, callBack) => {
    pool.query(
      `INSERT INTO posts(title, body, createdDate) VALUES(?, ?, '${data.createDate}')`,
      [data.title, data.body],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPosts: (callBack) => {
    pool.query(`SELECT * from posts`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getPostsByID: (id, callBack) => {
    pool.query(
      `SELECT * from posts WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
