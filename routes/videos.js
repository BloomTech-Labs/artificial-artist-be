const router = require("express").Router();
const Videos = require("../models/video_model");
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

router.post("/", restricted, async (req, res) => {
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
