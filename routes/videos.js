const router = require('express').Router();
const Videos = require('../models/video_model');

router.get('/', async (req, res) => {
    try {
        const videos = await Videos.find();
        res.json(videos)
    } catch (err) {
        res.send({ message: "Try again later.", err });
    };
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const videos = await Videos.findById(id);
        res.json(videos);
    } catch (err) {
        res.send({ message: "Try again later.", err });
    };
});

module.exports = router;