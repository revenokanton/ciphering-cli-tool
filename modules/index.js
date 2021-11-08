const util = require("util");
const stream = require("stream");
const { getReadStream, getWriteStream } = require("./streams/stream");
const CryptoTransformStream = require("./streams/transform");
const { getTransformSteps } = require("./ciphers/cipher_steps");

const startApp = async () => {
  const pipeline = util.promisify(stream.pipeline);

  const transformSteps = getTransformSteps();

  const transformers = transformSteps.map((transformer) => {
    return new CryptoTransformStream(transformer);
  });

  try {
    await pipeline(getReadStream(), ...transformers, getWriteStream());
    console.log("Pipeline succeeded");
  } catch (err) {
    console.error("Pipeline failed", err);
  }
};

module.exports = startApp;
