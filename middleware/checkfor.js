module.exports = (props) => (req, res, next) =>
  props.map((prop) =>
    req.body[prop]
      ? next()
      : res
          .status(400)
          .json({
            errorMessage: `The ${prop} is required to create a video. Please include a ${prop} and try again.`,
          })
  );
