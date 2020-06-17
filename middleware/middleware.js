const jwt = require("jsonwebtoken");
const secret = require("../data/secret");

module.exports = {
  restricted: (req, res, next) => {
    const token = req.headers.authorization;
    if (req.decodedJwt) {
      next();
    } else if (token) {
      jwt.verify(token, secret.jwtSecret, (err, decodedJwt) => {
        if (err) {
          res.status(401).json({ message: "You need to sign in!", err });
        } else {
          req.decodedJwt = decodedJwt;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "You need to sign in!" });
    }
  },
  checkFor: (fields) => (req, res, next) => {
    fields.forEach((field) => {
      if (!req.body[field]) {
        console.log(
          `error thrown for ${field} that is equal to ${req.body[field]}`
        );
        res.status(400).json({
            errorMessage: `The ${field} is required to create a video. Please include ${field} and try again.`,
        });
      } else {
        console.log(`${field} is ${req.body[field]}`);
        next();
      }
    });
  },
};
