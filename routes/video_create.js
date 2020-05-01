const router = require('express').Router();
const Videos = require('../models/video_model');

router.post('/', async (req, res) => {
    const data = req.body;
    
    try {
        if (!data.video_title) {
            res.status(404).json({ message: "Please provide a title!" });
        } else {
            if (!data.location) {
                res.status(404).json({ message: "Please provide a location!" });
            } else {
                if (!data.song_name) {
                    res.status(404).json({ message: "Please provide a song name!" });
                } else {
                    const video = await Videos.add(data);
                    res.status(200).json({ video });
                }
            }
        }
    } catch (err) {

    };
});

module.exports = router;