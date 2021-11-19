const { CONFIG, INPUT_FILE, OUTPUT_FILE } = require("../constants");

/**
 * Return parsed parameter from using provided args
 * with provided arg names
 *
 * @returns {(string|null)} - Arg parameter value or null
 */
const getValueFromArgs = (argNames, args) => {
  const configIndex = args.findIndex(
    (i) => i === argNames[0] || i === argNames[1]
  );

  if (configIndex === -1) {
    return null;
  }

  return args[configIndex + 1] ? args[configIndex + 1] : null;
};

/**
 * Return config value from args
 *
 * @returns {string[]} - Config value
 */
const getConfigProps = (args) => {
  return getValueFromArgs(CONFIG, args).split("-");
};

/**
 * Return input file path
 *
 * @returns {(string|null)} - Input file path
 */
const getInputFilePath = (args) => {
  return getValueFromArgs(INPUT_FILE, args);
};

/**
 * Return output file path
 *
 * @returns {(string|null)} - Output file path
 */
const getOutputFilePath = (args) => {
  return getValueFromArgs(OUTPUT_FILE, args);
};

module.exports = {
  getConfigProps,
  getInputFilePath,
  getOutputFilePath,
  getValueFromArgs,
};
