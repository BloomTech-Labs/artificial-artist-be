const router = require('express').Router();
const bc = require('bcryptjs');

const regMiddleware = require('../middleware/register-error-middleware');
const loginMiddleware = require('../middleware/login-error-middleware');

router.post('/register', regMiddleware, async (req, res) => {
    const data = req.body;
    data.password = bc.hashSync(data.password, 12);

    try {
        const reg = await Users.add(data);
        res.status(201).json(reg, token);
    } catch (err) {
        res.status(500).json({ message: 'Could not register user, please try again later.', err });
    }
});

router.post('/login', loginMiddleware, async (req, res) => {
    const { email, password } = req.body;
    try {
        const log = await Users.findBy({email}).first();
        if (log && bc.compareSync(password, log.password)) {
            const token = genToken(log);
            res.status(200).json({ message: `Welcome ${log.username}!`, token: token });
        } else {
            res.status(401).json({ message: 'Credentials incorrect, please try again.', err });
        }
    } catch (err) {
        res.status(500).json({ message: 'Could not log parent in, please try again later.', err });
    }
});

module.exports = router;