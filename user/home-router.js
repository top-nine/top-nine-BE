// @ts-nocheck
const router = require("express").Router();
const Users = require("../user/users-model");
const TopNine = require("./top-nine-model");

router.get("/", async (req, res) => {
  try {
    const user = await Users.findByEmail(req.decodedToken.email);
    const topNine = await TopNine.findById(user.id);
    let authUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      topNine
    };
    res.status(200).json(authUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/add-top-nine", async (req, res) => {
  let top9 = req.body;
  try {
    if (
      top9.title === "" ||
      top9.title === null ||
      top9.description === "" ||
      top9.description === null
    ) {
      res.status(400).json({ message: "Please Fill in All Required Fields" });
    } else {
      top9.user_id = req.decodedToken.id;
      const new9 = await TopNine.addItem(top9);
      console.log("new9", new9);
      res.status(201).json({ message: "Success", id: new9.id });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id/edit-top-nine", async (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  try {
    if (
      changes.title === "" ||
      changes.title === null ||
      changes.description === "" ||
      changes.description === null
    ) {
      res.status(400).json({ message: "Please fill in all required fields" });
    } else {
      const new9 = await TopNine.updateItem(id, changes);
      if (new9) {
        res.status(200).json({ message: "Success", id: new9.id });
      } else {
        res.status(404).json({ message: "This item does not exist" });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id/delete-top-nine", async (req, res) => {
  try {
    const count = await TopNine.deleteItem(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(404).json({ message: "This item does not exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
