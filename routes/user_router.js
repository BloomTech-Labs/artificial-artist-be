const router = require('express').Router();

const Users = require('../models/users_model');
const restricted = require('../middleware/restricted_middleware');

router.get('/', restricted, async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    }
    catch (err) {
        res.send({ message: "Try again later.", err })
    };
});

router.get('/:id', restricted, async(req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findBy(id);
        res.json(user);
    }
    catch (err) {
        res.send({ message: "Try again later.", err })
    };
});