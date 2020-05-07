const router = require("express").Router();
const Songs = require("../models/song_model");

router.get('/', async (req, res) => {
  try {
    const songs = await Songs.find();
    res.json(songs)
  } catch (err) {
    res.send({ message: "Try again later.", err })
  };
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    
    const song = await Songs.findById(id);
    
    res.json(song);
    console.log(id);
  } catch (err) {
    res.send({ message: "Try again later.", err })
  };
});

router.post("/", async (req, res) => {
  const data = req.body;
  const { deezer_id, title_short, artist_name, preview } = req.body;

  try {
    if (!deezer_id) {
      res.status(400).json({ message: "Please provide a song!" });
    } else {
      if (!title_short) {
        res.status(400).json({ message: "Please provide a song title!" });
      } else {
        if (!artist_name) {
          res.status(400).json({ message: "Please provide an artist name!" });
        } else {
          if (!preview) {
            res.status(400).json({ message: "Please include a song!" });
          } else {
            const song = await Songs.add(data);
            res.status(200).json(song);
          }
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Try again later!", err });
  }
});

module.exports = router;
