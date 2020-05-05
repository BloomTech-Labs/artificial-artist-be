const jwt = require('jsonwebtoken');
const secret = require('../data/secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (req.decodedJwt) {
        next();
    } else if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedJwt) => {
            if (err) {
                res.status(401).json({ message: 'You need to sign in!', err });
            } else {
                req.decodedJwt = decodedJwt;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You need to sign in!' })
    }
};