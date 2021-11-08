const { CONFIG, INPUT_FILE, OUTPUT_FILE, ARGS } = require("../constants");

/**
 * Return parsed parameter from using provided args
 * with provided arg names
 *
 * @param argNames variety of arg name
 * @returns {*} - Arg parameter value or null
 */
const getValueFromArgs = (argNames) => {
  const configIndex = ARGS.findIndex(
    (i) => i === argNames[0] || i === argNames[1]
  );

  if (configIndex === -1) {
    return null;
  }

  return ARGS[configIndex + 1] ? ARGS[configIndex + 1] : null;
};

/**
 * Obtain a config for cipher. If user did not assign the
 * value to the console argument <--config>, then we return <undefined>.
 *
 * @returns {*} - A path to an input file or <undefined>
 */
const getConfig = () => {
  return getValueFromArgs(CONFIG);
};

/**
 * Obtain a path to an input file. If user did not assign the
 * value to the console argument <--input>, then we return <undefined>.
 *
 * @returns {*} - A path to an input file or <undefined>
 */
const getInputFile = () => {
  return getValueFromArgs(INPUT_FILE);
};

/**
 * Obtain a path to an output file. If user did not assign the
 * value to the console argument <--output>, then we return <undefined>.
 *
 * @returns {*} - A path to an output file or <undefined>
 */
const getOutputFile = () => {
  return getValueFromArgs(OUTPUT_FILE);
};

module.exports = {
  getConfig,
  getInputFile,
  getOutputFile,
};
