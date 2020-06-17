module.exports = (fields) => (req, res, next) =>
  fields.forEach((field) => {
    if (`req.body.${field}`) {
      console.log(field);
      next();
    } else {
      res.status(400).json({
        errorMessage: `The ${field} is required to create a video. Please include a ${field} and try again.`,
      });
    }
  });
