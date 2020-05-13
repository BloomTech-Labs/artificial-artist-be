const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../routes/auth_router');
const userRouter = require('../routes/user_router');
const video_create = require('../routes/video_create');
const videos = require('../routes/videos');
const songs = require('../routes/songs');

router.use('/auth', authRouter);
router.use('/user', restricted, userRouter);
router.use('/create-video', restricted, video_create);
router.use('/videos', videos);
router.use('/songs', restricted, songs);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;