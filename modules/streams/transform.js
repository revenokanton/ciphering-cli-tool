const stream = require("stream");
const { encode, decode, caesar, rot8, atbash } = require("../ciphers/cipher");
const { CESAR, ROT8, ATBASH } = require("../constants");

class CryptoTransformStream extends stream.Transform {
  constructor(step) {
    super();
    this.algorithm = this.getTransAlg(step.charAt(0));
    this.shift = parseInt(step.charAt(1), 10);
  }

  _transform(data, encoding, callback) {
    const stringData = data.toString();
    const func =
      this.shift === 1
        ? encode(this.algorithm, stringData)
        : decode(this.algorithm, stringData);
    this.push(func);

    callback();
  }

  getTransAlg(step) {
    switch (step) {
      case CESAR: {
        return caesar(1);
      }
      case ROT8: {
        return rot8;
      }
      case ATBASH: {
        return atbash;
      }
    }
  }
}

module.exports = {
  CryptoTransformStream,
};
