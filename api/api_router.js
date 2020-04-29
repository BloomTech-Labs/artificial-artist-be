const router = require('express').Router();

const authRouter = require('../routes/auth_router');

router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;