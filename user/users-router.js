const router = require("express").Router();
const Users = require("../user/users-model");

router.get("/", (req, res) => {
  res.send("welcome to /users");
});

module.exports = router;
