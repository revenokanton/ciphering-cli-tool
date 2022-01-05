const { CONFIG, INPUT_FILE, OUTPUT_FILE, ARGS } = require("../constants");

/**
 * Return parsed parameter from using provided args
 * with provided arg names
 *
 * @param argNames variety of arg name
 * @returns {(string|null)} - Arg parameter value or null
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
 * Return config value from args
 *
 * @returns {string[]} - Config value
 */
const getConfigProps = () => {
  return getValueFromArgs(CONFIG).split("-");
};

/**
 * Return input file path
 *
 * @returns {(string|null)} - Input file path
 */
const getInputFilePath = () => {
  return getValueFromArgs(INPUT_FILE);
};

/**
 * Return output file path
 *
 * @returns {(string|null)} - Output file path
 */
const getOutputFilePath = () => {
  return getValueFromArgs(OUTPUT_FILE);
};

module.exports = {
  getConfigProps,
  getInputFilePath,
  getOutputFilePath,
};
