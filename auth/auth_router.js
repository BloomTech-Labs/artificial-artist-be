const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../data/secret");

const Users = require("../users/users_model");

router.post("/register", async (req, res) => {
  const data = req.body;
  const { username, email, password, first_name, last_name } = req.body;
  data.password = bc.hashSync(data.password, 12);

  try {
    const reg = await Users.add(data);
    if (!username) {
      res.status(404).json({ message: "Please provide your username!" });
    } else {
      if (!email) {
        res.status(404).json({ message: "Please provide your email!" });
      } else {
        if (!password) {
          res.status(404).json({ message: "Please provide a password!" });
        } else {
          if (!first_name) {
            res.status(404).json({ message: "Please provide your first_name!" });
          } else {
            if (!last_name) {
              res.status(404).json({ message: "Please provide your last_name!" });
            } else {
              const token = genToken(reg);
              res.status(201).json({ reg, token: token });
            }
          }
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
    
    const signIn = await Users.findBy({ email }).first();
    if (signIn && bc.compareSync(password, signIn.password)) {
      if (!email) {
        res.status(404).json({ message: "Please provide your email!" });
      } else {
        if (!password) {
          res.status(404).json({ message: "Please provide a password!" });
        } else {
          const token = genToken(signIn);
          res
            .status(200)
            .json({ signIn, token: token });
        }
      }
    } else {
      res
        .status(401)
        .json({ message: "Credentials incorrect, please try again.", err });
    }
  } catch (err) {
      res.status(500).json({ message: 'Could not log in, please try again later.', err });
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
