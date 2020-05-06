const router = require('express').Router();
const Videos = require('../models/video_model');
const Songs = require('../models/song_model');

router.post('/', async (req, res) => {
    const data = req.body;
    const {video_title, location, song_name} = req.body;
    const videoObject = {
        video_title: data.video_title,
        location: data.location,
        song_id: data.song_id,
        user_id: data.user_id     
    };
    const songObject = {
        song_name: data.song_name,
        artist_name: data.artist_name
    };
    
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
            console.log(videoObject, songObject);
                    const video = await Videos.add(videoObject);
                    const song = await Songs.add(songObject);
                    res.status(200).json({ video, song });
                }
            }
        }
    } catch (err) {
        res.status(500).json({ message: "Try again later!", err });
    };
});

module.exports = router;