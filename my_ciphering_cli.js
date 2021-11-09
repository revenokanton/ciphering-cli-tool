const util = require("util");
const stream = require("stream");
const { getReadStream, getWriteStream } = require("./modules/streams/stream");
const { CryptoTransformStream } = require("./modules/streams/transform");
const { getConfigProps } = require("./modules/helpers/args");
const { handleError } = require("./modules/helpers/error_handler");
const { validateAppArgs } = require("./modules/helpers/validation");

const startApp = async () => {
  validateAppArgs();

  const pipeline = util.promisify(stream.pipeline);

  const config = getConfigProps();

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

startApp();
