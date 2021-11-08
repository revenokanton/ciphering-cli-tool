const stream = require("stream");

module.exports = class UpperCaseTransformer extends stream.Transform {
  constructor(transformSteps) {
    super();
    this.transformSteps = transformSteps;
  }

  _transform(data, encoding, callback) {
    this.push(this.chunkData(data.toString()));
    callback();
  }

  chunkData(data) {
    let chunk = data;
    this.transformSteps.forEach((transformFunc) => {
      chunk = transformFunc(chunk);
    });
    return chunk;
  }
};
