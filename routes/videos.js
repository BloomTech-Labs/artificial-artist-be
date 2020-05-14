const router = require("express").Router();
const Videos = require("../models/video_model");
const Songs = require("../models/song_model");
const restricted = require("../middleware/restricted_middleware");

router.get("/", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json({ videos });
  } catch (err) {
    res.status(500).json({ message: "Try again later.", err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Videos.findById(id);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: "Try again later.", err });
  }
});

// if you post to video
// You want to check for main variables in two tables
// Song table first because videos has a foreign key referencing the song.id
// songs: deezer_id, title, artist_name
// videos: video_title, location
// We'll want to adjust the model to allow for both


router.post("/", restricted, async (req, res) => {
  // this should be unnecessary because we're rebuilding objects
  // const data = req.body;
  const { title_short, preview, artist, deezer_id, location, video_title, user_id } = req.body;

  const songObject = {
    deezer_id: deezer_id,
    title: title_short,
    artist_name: artist
  }

  // console.log(songObject);

  const videoObject = {
    video_title: video_title,
    location: location,
    song_id: "",
    user_id: user_id
  };

  // console.log(videoObject);

  try {
        const song = await Songs.add(songObject);
        console.log(song);

        const videoObjectComplete = { ...videoObject, song_id: song };

        console.log(videoObjectComplete);

        // console.log(videoObjectComplete);
        // we want song to return its id
        // then we'll destructure or spread some object to add that in
        // then we'll 'add' that object to videos.add
        const video = await Videos.add(videoObjectComplete);

        console.log(video);

        res.status(200).json(song);
        res.status(200).json(video);
        // if (!video_title) {
        //   res.status(400).json({ message: "PLease provide a Video Title!" });
        // } else {
        //   if (!location) {
        //     res.status(400).json({ message: "Please provide a location!" });
        //   } else {
        //     if (!song_id) {
        //       res.status(400).json({ message: "Please provide a song!" });
        //     } else {
        //       if (!user_id) {
        //         res.status(400).json({ message: "Please provide a user!" });
        //       } else {
        //         const video = await Videos.add(data);
        //         res.status(200).json(video);
        //       }
        //     }
        //   }
        // }
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Try again later!", err });
      }
});



module.exports = router;
