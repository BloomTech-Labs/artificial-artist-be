module.exports = (props) => (req, res, next) => {
  let presentParams = [];
  let missingParams = [];
  let requestValues = Object.keys(req.body);

  props.map((bodyParam) => {
    if (requestValues.includes(bodyParam)) {
      presentParams = [...presentParams, bodyParam];
    } else {
      missingParams = [...missingParams, bodyParam];
    }
  });

  if (missingParams.length > 0) {
    const errorMsg = `The ${missingParams} is required to create a video. Please include ${missingParams} and try again.`;
    const error = new Error(errorMsg);
    error.httpStatusCode = 400;
    return next(error);
  }
  if (presentParams.length == props.length) {
    return next();
  }
};
