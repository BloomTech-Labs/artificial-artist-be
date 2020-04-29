const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../data/secret");

router.post("/register", async (req, res) => {
  const data = req.body;
  data.password = bc.hashSync(data.password, 12);

  try {
    const { username, email, password } = req.body;
    if (!username) {
      res.status(404).json({ message: "Please provide your username!" });
    } else {
      if (!email) {
        res.status(404).json({ message: "Please provide your email!" });
      } else {
        if (!password) {
          res.status(404).json({ message: "Please provide a password!" });
        } else {
          const reg = await Users.add(data);
          res.status(201).json(reg, token);
        }
      }
    }
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Could not register user, please try again later.",
        err,
      });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const log = await Users.findBy({ email }).first();

    if (log && bc.compareSync(password, log.password)) {
      if (!username) {
        res.status(404).json({ message: "Please provide your username!" });
      } else {
        if (!password) {
          res.status(404).json({ message: "Please provide a password!" });
        } else {
          const token = genToken(log);
          res
            .status(200)
            .json({ message: `Welcome ${log.username}!`, token: token });
        }
      }
    } else {
      res
        .status(401)
        .json({ message: "Credentials incorrect, please try again.", err });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Could not log parent in, please try again later.",
        err,
      });
  }
});

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
  };

  const options = { expiresIn: "12hours" };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;
