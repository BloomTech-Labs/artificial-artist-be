const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../routes/auth_router');
const userRouter = require('../routes/user_router');
const video_update = require('../routes/video_update');
const videos = require('../routes/videos');
const songs = require('../routes/songs');

router.use('/auth', authRouter);
router.use('/users', restricted, userRouter);
router.use('/update-video', video_update);
router.use('/videos', videos);
router.use('/songs', restricted, songs);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;