const util = require("util");
const stream = require("stream");
const { getReadStream, getWriteStream } = require("./streams/stream");
const { CryptoTransformStream } = require("./streams/transform");
const { getConfig } = require("./helpers/args");
const { handleError } = require("./helpers/error_handler");

const startApp = async () => {
  const pipeline = util.promisify(stream.pipeline);

  const config = getConfig();

  const transformers = config.map((cipher) => {
    return new CryptoTransformStream(cipher);
  });

  try {
    await pipeline(getReadStream(), ...transformers, getWriteStream());
    console.log("Text was successfully transformed");
  } catch (err) {
    handleError(err);
  }
};

module.exports = startApp;
