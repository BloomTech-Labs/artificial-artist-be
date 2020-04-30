const router = require('express').Router();

const authRouter = require('../routes/auth_router');
const userRouter = requre('../routes/user_router.js');

router.use('/auth', authRouter);
router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;