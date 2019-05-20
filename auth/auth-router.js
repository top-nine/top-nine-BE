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
    console.log(error);
    res.status(500).json(error);
  }
});

// login
router.post("/login", (req, res) => {
  res.send("welcome to /login");
});

module.exports = router;
