const { createPost, getPostsByID, getPosts } = require("./posts.service.js");

module.exports = {
  createPost: (req, res) => {
    const body = req.body;

    const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    body.createDate = date;

    createPost(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      body.id_region = results.insertId;
      return res.status(201).json(body);
    });
  },
  getPostsByID: (req, res) => {
    const id = req.params.id;
    getPostsByID(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!results) {
        return res.status(404).send();
      }
      console.log("gauk man ji");
      return res.status(200).json(results);
    });
  },
  getPosts: (req, res) => {
    getPosts((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.json(results);
    });
  },
};
