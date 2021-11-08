const stream = require("stream");

module.exports = class CryptoTransformStream extends stream.Transform {
  constructor(transformer) {
    super();
    this.func = transformer;
  }

  _transform(data, encoding, callback) {
    this.push(this.func(data.toString()));
    callback();
  }
};
