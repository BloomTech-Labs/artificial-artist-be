const router = require('express').Router();
const restricted = require('../middleware/restricted_middleware');
const authRouter = require('../auth/auth_router');
const userRouter = require('../users/users_router');
const videos = require('../videos/videos');
const songs = require('../songs/songs');

router.use('/auth', authRouter);
router.use('/user', restricted, userRouter);
router.use('/videos', videos);
router.use('/songs', restricted, songs);

router.get('/', (req, res) => {
    res.json('Artificial Artist API');
});

module.exports = router;
