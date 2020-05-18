const router = require("express").Router();
const Videos = require("./video_model");

router.put("/:id", async (req, res) => {
  const { id } = req.body;
  const data = req.body;

  console.log(data);

        Videos.update(data, id).then((updatedVideo) => {
          res
            .status(200)
            .json({ message: "Successfully updated video!", data });
        });

  // try {
  //   const changed = await Videos.findById(id);

  //   if (changed) {
  //     Videos.update(data, id)
  //     .then(updatedVideo => {
  //       res.status(200).json({ message: "Successfully updated video!", data })
  //     })
  //   } else {
  //     res.status(404).json({ message: "Could not find video!"})
  //   }
  // } catch (err) {
  //   res.status(500).json({ message: "Try again later.", err });
  // };
});

module.exports = router;
