const router = require("express").Router();
const Videos = require("./videos_model");
const Songs = require("../songs/songs_model");
const restricted = require("../middleware/restricted_middleware");
const checkfor = require("../middleware/checkfor.js");
const axios = require("axios");
const uuid = require("uuid");
const AWS = require("aws-sdk");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json({ videos });
  } catch (err) {
    res.status(500).json({ message: "Could not get videos", err });
  }
});

router.get("/random9", async (req, res) => {
  try {
    const videos = await Videos.find9();
    res.status(200).json({ videos });
  } catch ({ err }) {
    res.status(500).json({
      errorMessage: `Encountered ${err} while retrieving videos from the database.`,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Videos.findById(id);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ message: "Could not find a video by this ID", err });
  }
});

AWS.config.update({
  subregion: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

router.get("/single/file-check", async (req, res) => {
  const { fileName, videoId } = req.body;

  try {
    s3checker(fileName, videoId);
  } catch (err) {
    res.status(500).json({ message: "Could not check video", err });
  }
});

// Not sure if this is the right way to do this, but nesting count inside this makes it so you can run the function
// Multiple times and not have the count get arbitrarily reset
const fileCheckExists = (fileName, videoId) => {
  let count = 0;
  const s3checker = (fileName, videoId) => {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: `${fileName}.mp4`,
    };
    s3.headObject(params, function (err, metadata) {
      if (err && err.code === "NotFound") {
        // Handle no object on cloud here
        // 20 minutes of file checking before failing
        if (count <= 120) {
          // Retry checking if file exists every 10 seconds
          // until it has been 20 minutes, then fail
          setTimeout(() => {
            s3checker(fileName, videoId);
            count++;
            console.log(
              `I'm still trying, ${count * 10} seconds, for file: ${
                params.Key
              }, Error is: ${err}`
            );
          }, 10000);
        } else {
          let count = 0;
          Videos.update({ video_status: "failed" }, videoId)
            .then(() => {
              console.log(`I'm giving up, ${err}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        s3.getSignedUrl("getObject", params, (err, data) => {
          if (err) {
            let count = 0;
            console.log(`${err}`);
          } else {
            // This is success!
            let count = 0;
            Videos.update({ video_status: "successful" }, videoId)
            .then(() => {
              console.log(`Found the file!, ${data}`);
            })
            .catch(err => {
              console.log(err);
            });
          }
        });
      }
    });
  };
  s3checker(fileName, videoId);
};

// if you post to video
// You want to check for main variables in two tables
// Song table first because videos has a foreign key referencing the song.id
// songs: deezer_id, title, artist_name
// videos: video_title, location
// We'll want to adjust the model to allow for both

router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const userVideos = await Videos.findByUser(userId);
    res.status(200).json(userVideos);
  } catch (err) {
    res.status(500).json({ message: "Could not get user videos", err });
  }
});

router.post(
  "/",
  restricted,
  checkfor([
    "artist",
    "deezer_id",
    "preview",
    "title_short",
    "user_id",
    "video_title",
  ]),
  async (req, res) => {
    const {
      artist,
      deezer_id,
      preview,
      title_short,
      user_id,
      video_title,
      im_group,
      jitter,
      depth,
      truncation,
      pitch_sensitivity,
      tempo_sensitivity,
      smooth_factor,
    } = req.body;

    const songObject = {
      deezer_id: deezer_id,
      title: title_short,
      artist_name: artist,
    };

    const videoObject = {
      video_title: video_title,
      location: "",
      thumbnail: "",
      song_id: "",
      user_id: user_id,
    };

    try {

      // Check if song exists in database by deezer id
      // If yes, return the id for that song
      // If no, add the song, then return the new id
      let songId;
      const songCheck = await Songs.findByDeezer(songObject.deezer_id);
      if (songCheck[0] && songCheck[0].artist_name.length > 0) {
        songId = songCheck[0].id;
      } else {
        const song = await Songs.add(songObject);
        songId = song;
      }

      const videoId = uuid.v4();

      const videoObjectComplete = {
        ...videoObject,
        video_status: "creating",
        location: `https://artificial-artist.s3.amazonaws.com/${videoId}.mp4`,
        thumbnail: `https://artificial-artist.s3.amazonaws.com/${videoId}.jpg`,
        song_id: songId,
      };

      const video = await Videos.add(videoObjectComplete);

      await axios
        .post(
          "http://artificial-artist.eba-cyfpphb2.us-east-1.elasticbeanstalk.com/entry",
          {
            params: {
              preview: preview,
              video_id: videoId,
              im_group: im_group,
              jitter: jitter,
              depth: depth,
              truncation: truncation,
              pitch_sensitivity: pitch_sensitivity,
              tempo_sensitivity: tempo_sensitivity,
              smooth_factor: smooth_factor,
            },
          }
        )
        .catch((err) => console.log(err));

      objectIds = {
        songId: songId,
        videoId: video,
      };

      console.log(objectIds);
      fileCheckExists(videoId, video);

      res.status(200).json({
        message: "Successfully sent video to the DS server!",
        objectIds,
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Could not post video to DS server", err });
    }
  }
);

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const data = req.body;

  console.log(id);
  console.log(data);

  Videos.update(data, id)
    .then((updatedVideo) => {
      console.log(updatedVideo);
      res.status(200).json({ message: "Successfully updated video!", data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Unable to update video", err });
    });
});

module.exports = router;
