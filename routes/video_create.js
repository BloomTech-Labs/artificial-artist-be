const router = require("express").Router();
const Videos = require("../models/video_model");

router.post("/", async (req, res) => {
  const data = req.body;
  const { video_title, location, song_id, user_id } = req.body;

  try {
    if (!video_title) {
      res.status(400).json({ message: "PLease provide a Video Title!" });
    } else {
      if (!location) {
        res.status(400).json({ message: "Please provide a location!" });
      } else {
        if (!song_id) {
          res.status(400).json({ message: "Please provide a song!" });
        } else {
          if (!user_id) {
            res.status(400).json({ message: "Please provide a user!" });
          } else {
            const video = await Videos.add(data);
            res.status(200).json(video);
          }
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Try again later!", err });
  }
});

module.exports = router;
