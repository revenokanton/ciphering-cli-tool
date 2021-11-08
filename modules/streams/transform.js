const stream = require("stream");
const { encode, decode } = require("../ciphers/cipher");

module.exports = class CryptoTransformStream extends stream.Transform {
  constructor(transformer) {
    super();
    this.algorithm = transformer.algorithm;
    this.shift = transformer.shift;
  }

  _transform(data, encoding, callback) {
    const func =
      this.shift === 1
        ? encode(this.algorithm, data.toString())
        : decode(this.algorithm, data.toString());
    this.push(func);
    callback();
  }
};
