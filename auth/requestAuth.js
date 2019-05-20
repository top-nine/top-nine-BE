const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secrets = require("../config/secrets");

router.post("/register", (req, res) => {
  res.send("welcome to /register");
});

router.post("/register", (req, res) => {
  res.send("welcome to /register");
});
