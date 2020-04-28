const router = require('express').Router();

const authRouter = require('../routers/auth-router');

router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;