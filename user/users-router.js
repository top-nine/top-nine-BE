const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("welcome to /users");
});

module.exports = router;
