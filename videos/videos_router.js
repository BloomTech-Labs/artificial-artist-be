const router = require("express").Router();
const Videos = require("./videos_model");
const Songs = require("../songs/songs_model");
const restricted = require("../middleware/restricted_middleware");
const axios = require('axios')
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
    const {rows} = await Videos.find9();
    res.status(200).json({rows});
  } catch ({err}) {
    res.status(500).json({errorMessage: `Encountered ${err} while retrieving videos from the database.`});
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

// Check if S3 file exists
// router.get("/single/check-for-file", async (req, res) => {
//     const { fileName } = req.body;
//     console.log(req.body);
//     const params = {
//       Bucket: process.env.AWS_BUCKET,
//       Key: fileName,
//     };
//     console.log(params);
//     try {
//       s3.headObject(params, function (err, metadata) {
//         if (err && err.code === "NotFound") {
//           // Handle no object on cloud here
//           console.log(err);
//         } else {
//           s3.getSignedUrl("getObject", params, (err, data) => {
//             if (err) res.status(500).json({ message: err });
//             else     res.status(200).json({ message: data });
//           });
//         }
//       });
//     } catch (err) {
//       res.status(500).json({ message: "You've found me", err });
//     }
// });

const s3checker = (fileName, videoId) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: fileName,
  };
  s3.headObject(params, function (err, metadata) {
    if (err && err.code === "NotFound") {
      // Handle no object on cloud here
      console.log(err);
    } else {
      s3.getSignedUrl("getObject", params, (err, data) => {
        if (err) {
          setTimeout(() => {
            res.status(500).json({ message: err })
          }, 10000);
        } else {
          Videos.update({ video_created: true }, videoId);
          res.status(200).json({ message: data })
        }
      });
    }
  });
}

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

router.post("/", restricted, async (req, res) => {
  const {
    title_short,
    preview,
    artist,
    deezer_id,
    location,
    video_title,
    user_id
  } = req.body;

  const songObject = {
    deezer_id: deezer_id,
    title: title_short,
    artist_name: artist
  };

  const videoObject = {
    video_title: video_title,
    location: "",
    thumbnail: "",
    song_id: "",
    user_id: user_id,
  };

  try {
    if (!title_short) {
      res.status(400).json({ message: "Missing title_short!" });
    } else {
      if (!preview) {
        res.status(400).json({ message: "Missing preview!" });
      } else {
        if (!artist) {
          res.status(400).json({ message: "Missing artist!" });
        } else {
          if (!deezer_id) {
            res.status(400).json({ message: "Missing deezer_id!" });
          } else {
              if (!video_title) {
                res.status(400).json({ message: "Missing video_title!" });
              } else {
                if (!user_id) {
                  res.status(400).json({ message: "Missing user_id!" });
                } else {
                  const song = await Songs.add(songObject);

                  const videoId = uuid.v4();

                  const videoObjectComplete = {
                    ...videoObject,
                    location: `https://artificial-artist.s3.amazonaws.com/${videoId}.mp4`,
                    thumbnail: `https://artificial-artist.s3.amazonaws.com/${videoId}.jpg`,
                    song_id: song,
                  };

                  // we want song to return its id
                  // then we'll destructure or spread some object to add that in
                  // then we'll 'add' that object to videos.add
                  const video = await Videos.add(videoObjectComplete);
                  
                  await axios
                    .post(
                      "http://artificial-artist.eba-cyfpphb2.us-east-1.elasticbeanstalk.com/entry",
                      null,
                      {
                        params: {
                          preview: preview,
                          video_id: videoId,
                        },
                      }
                    )
                    .catch((err) => console.log(err));

                  objectIds = {
                    songId: song,
                    videoId: video
                  };

                  console.log(objectIds);

                  s3checker(videoId, video);

                  res
                    .status(200)
                    .json({
                      message: "Successfully created video!",
                      objectIds,
                    });
                }
              }
            }
          }
        }
      }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Could not post video", err });
  }
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const data = req.body;

  console.log(id);
  console.log(data);

  Videos.update(data, id)
    .then(updatedVideo => {
      console.log(updatedVideo);
      res.status(200).json({ message: "Successfully updated video!", data });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Unable to update video", err });
    });
});

module.exports = router;
