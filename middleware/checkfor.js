checkFor([a,b,c,d,e])



module.exports = props => (req, res, next) =>
props.map(prop=>




req.body[prop]

    ? next()
    : res.status(400).json({ errorMessage: `missing ${prop} is required` })

    )



    module.exports = prop => (req, res, next) =>
    req.body[prop]
        ? next()
        : res.status(400).json({ errorMessage: `missing ${prop} is required` });




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
            if (!location) {
              res.status(400).json({ message: "Missing location!" });
            } else {
              if (!video_title) {
                res.status(400).json({ message: "Missing video_title!" });
              } else {
                if (!user_id) {
                  res.status(400).json({ message: "Missing user_id!" });