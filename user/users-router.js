const router = require("express").Router();
const Users = require("../user/users-model");
const TopNine = require("./top-nine-model");

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/top-nine", async (req, res) => {
  try {
    const topNine = await TopNine.findById(req.params.id);
    res.status(200).json(topNine);
  } catch (error) {
    res.status(404).json({ message: "Unable to find resource" });
  }
});

module.exports = router;
