const router = require("express").Router();
const Users = require("../user/users-model");

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {}
});

module.exports = router;
