const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../routes/auth_router');
const userRouter = require('../routes/user_router');
const video_create = require('../routes/video_create');
const video_list = require('../routes/video_list');

router.use('/auth', authRouter);
router.use('/user', restricted, userRouter);
router.use('/create-video', restricted, video_create);
router.use('/video-list', video_list);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;