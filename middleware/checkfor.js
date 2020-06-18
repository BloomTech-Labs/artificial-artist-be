module.exports = (props) => (req, res, next) => {
  let presentParams = [];
  let missingParams = [];
  let requestValues = Object.keys(req.body);
  console.log("line5", { requestValues });
  props.map((bodyParam) => {
    if (requestValues.includes(bodyParam)) {
      presentParams = [...presentParams, bodyParam];
      console.log("line9", { presentParams });
    } else {
      missingParams = [...missingParams, bodyParam];
      console.log("line12", { missingParams });
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
