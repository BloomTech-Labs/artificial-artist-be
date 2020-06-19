const router = require("express").Router();
const restricted = require("../middleware/restricted_middleware");
const authRouter = require("../auth/auth_router");
const userRouter = require("../users/users_router");
const videosRouter = require("../videos/videos_router.js");
const songsRouter = require("../songs/songs_router");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/videos", videosRouter);
router.use("/songs", restricted, songsRouter);

router.get('/', (req, res) => {
    res.status(200).json('Artificial Artist API');

});

module.exports = router;
