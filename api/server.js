const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const UsersRouter = require("../user/users-router");
const authRouter = require("../auth/auth-router");
const authMiddleware = require("../auth/auth-middleware");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/users", authMiddleware, UsersRouter);

server.get("/", (req, res) => {
  res.send(`Welcome To My-Top-Nine API`);
});

module.exports = server;
