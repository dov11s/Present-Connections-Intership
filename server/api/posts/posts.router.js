const { createPost, getPostsByID, getPosts } = require("./posts.controller.js");

const router = require("express").Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostsByID);

module.exports = router;
