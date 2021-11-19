const util = require("util");
const stream = require("stream");
const { getReadStream, getWriteStream } = require("./streams/stream");
const { CryptoTransformStream } = require("./streams/transform");
const { getConfigProps } = require("./helpers/args");
const { handleError } = require("./helpers/error_handler");
const { validateAppArgs } = require("./helpers/validation");

const startApp = async ({ args }) => {
  validateAppArgs(args);

  const pipeline = util.promisify(stream.pipeline);

  const config = getConfigProps(args);

  const transformers = config.map((cipher) => {
    return new CryptoTransformStream(cipher);
  });

  try {
    await pipeline(getReadStream(args), ...transformers, getWriteStream(args));

    console.log(
      `Text was successfully transformed according provided steps: ${config.join(
        "-"
      )} \nPlease check output file`
    );
  } catch (err) {
    handleError(err);
  }
};

module.exports = {
  startApp,
};
