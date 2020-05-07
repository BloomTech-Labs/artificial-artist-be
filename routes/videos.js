const router = require("express").Router();
const Videos = require("../models/video_model");

router.get("/video", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json({ videos });
  } catch (err) {
    res.send({ message: "Try again later.", err });
  }
});

router.get("/video/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Videos.findById(id);
    res.json(video);
  } catch (err) {
    res.send({ message: "Try again later.", err });
  }
});

module.exports = router;
