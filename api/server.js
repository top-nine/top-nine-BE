const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const UsersRouter = require("../user/users-router");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(`Welcome To My-Top-Nine API`);
});

server.get("/users", UsersRouter);

module.exports = server;
