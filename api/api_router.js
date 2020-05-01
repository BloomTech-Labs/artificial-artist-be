const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../routes/auth_router');
const userRouter = require('../routes/user_router');

router.use('/auth', authRouter);
router.use('/users', restricted, userRouter);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;