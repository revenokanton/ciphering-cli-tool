const stream = require("stream");
const {
  encode,
  decode,
  cipherModes,
  getCipherPeriod,
} = require("../ciphers/utils");
const { CESAR, ROT8, ATBASH } = require("../constants");

class CryptoTransformStream extends stream.Transform {
  constructor(step = "A") {
    super();
    this.algorithm = CryptoTransformStream.getAlgorithm(step.charAt(0));
    this.shift = parseInt(step.charAt(1), 10) ? 1 : -1;
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

  static caesarCipher(shift) {
    return cipherModes(
      (codeNum) => getCipherPeriod(26, codeNum + shift),
      (codeNum) => getCipherPeriod(26, codeNum - shift)
    );
  }

  static atbashCipher() {
    const cipher = (codeNum) => 25 - codeNum;
    return cipherModes(cipher, cipher);
  }

  static getAlgorithm(step) {
    switch (step) {
      case CESAR: {
        return CryptoTransformStream.caesarCipher(1);
      }
      case ROT8: {
        return CryptoTransformStream.caesarCipher(8);
      }
      case ATBASH: {
        return CryptoTransformStream.atbashCipher();
      }
    }
  }
}

module.exports = {
  CryptoTransformStream,
};
