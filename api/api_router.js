const router = require('express').Router();

const authRouter = require('../routes/auth_router');
const userRouter = require('../routes/user_router');
const video_create = require('../routes/video_create');
const video_list = require('../routes/video_list');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/create-video', video_create);
router.use('/video-list', video_list);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;