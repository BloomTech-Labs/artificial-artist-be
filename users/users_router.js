const router = require("express").Router();
const Users = require("./users_model");
const restricted = require("../middleware/restricted_middleware");

router.get("/", restricted, async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.send({ message: "Try again later.", err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findById(id);
    res.json(user);
  } catch (err) {
    res.send({ message: "Try again later.", err });
  }
});

router.get("/username/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const id = await Users.findIdByUsername(username);
    res.json(id);
  } catch (err) {
    res.status(500).send({ message: "Try again later.", err });
  }
});

module.exports = router;
