const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secrets = require("../config/secrets");
const Users = require("../user/users-model");

// register
router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    if (
      user.name === "" ||
      user.name === null ||
      user.email === "" ||
      user.email === null ||
      user.password === "" ||
      user.password === null
    ) {
      res.status(400).json({ message: "Please Fill In All the Fields" });
    } else {
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      const addUser = await Users.addUser(user);
      res.status(201).json({ message: "Success" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (
      email === "" ||
      email === null ||
      password === "" ||
      password === null
    ) {
      res
        .status(401)
        .json({ message: "Please make sure login credentials are accurate" });
    } else {
      const user = await Users.findByEmail(email).first();
      const token = generateToken(user);
      res.status(200).json({ message: "Success", token });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function generateToken(user) {
  const payload = {
    name: user.name,
    email: user.email
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
