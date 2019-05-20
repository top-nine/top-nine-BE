const router = require("express").Router();
const Users = require("../user/users-model");
const TopNine = require("./top-nine-model");

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/top-nine", async (req, res) => {
  try {
    const topNine = await TopNine.findById(req.params.id);
    res.status(200).json(topNine);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/add-top-nine", async (req, res) => {
  const top9 = req.body;
  try {
    if (
      top9.title === "" ||
      top9.title === null ||
      top9.description === "" ||
      top9.description === null
    ) {
      res.status(500).json({ message: "Please Fill in All Required Fields" });
    } else {
      const new9 = await TopNine.addItem(top9);
      // console.log(new9);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
