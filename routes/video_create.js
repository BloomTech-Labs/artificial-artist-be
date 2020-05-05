const router = require('express').Router();
const Videos = require('../models/video_model');
const Songs = require('../models/song_model');

router.post('/', async (req, res) => {
    const data = req.body;
    const {video_title, location, song_name} = req.body;
    
    try {
        if (!video_title) {
            res.status(404).json({ message: "Please provide a title!" });
        } else {
            if (!location) {
                res.status(404).json({ message: "Please provide a location!" });
            } else {
                if (!song_name) {
                    res.status(404).json({ message: "Please provide a song name!" });
                } else {
            console.log(data);
                    const video = await Videos.add(data);
                    const song = await Songs.add(data)
                    console.log(video, song);
                    res.status(200).json({ video });
                }
            }
        }
    } catch (err) {
        res.status(500).json({ message: "Try again later!", err });
    };
});

module.exports = router;