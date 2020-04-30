const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../routes/auth_router');
const userRouter = requre('../routes/user_router.js');

router.use('/auth', authRouter);
router.use('/users', restricted, userRouter);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;