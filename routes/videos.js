const router = require('express').Router();
const Videos = require('../models/video_model');
const Songs = require('../models/song_model');

router.get('/video', async (req, res) => {
    try {
        const videos = await Videos.find();
        const songs = await Songs.find();
        res.json({videos, songs})
    } catch (err) {
        res.send({ message: "Try again later.", err });
    };
});

router.get('/video/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const videos = await Videos.findById(id);
        res.json(videos);
    } catch (err) {
        res.send({ message: "Try again later.", err });
    };
});

module.exports = router;