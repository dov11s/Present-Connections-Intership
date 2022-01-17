require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const postRouter = require("./api/posts/posts.router");

app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is runing on port ${process.env.PORT}`);
});

app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
  res.send("labas veikia");
});
