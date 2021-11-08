const fs = require("fs");

// CLI args
const CONFIG = ["-c", "--config"];
const INPUT_FILE = ["-i", "--input"];
const OUTPUT_FILE = ["-o", "--output"];

// Obtain the console arguments
const args = process.argv.slice(2);

/**
 * Handle error as follows: we write the error message in process.stderr and
 * stop the process with code 1.
 *
 * @param err - Error object, which describe occurred error.
 */
const errorHandler = (err) => {
  if (err) {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  }
};

/**
 * Return parsed parameter from using provided args
 * with provided arg names
 *
 * @param argNames variety of arg name
 * @returns {*} - Arg parameter value or null
 */
const getValueFromArgs = (argNames) => {
  const configIndex = args.findIndex(
    (i) => i === argNames[0] || i === argNames[1]
  );

  if (configIndex === -1) {
    return null;
  }

  return args[configIndex + 1] ? args[configIndex + 1] : null;
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

/**
 * Checking if there are any multiplied arguments
 */
const checkMultipleArgs = (argNames) => {
  if (args.filter((item) => argNames.includes(item)).length > 1) {
    errorHandler(new Error(`There are multiple ${argNames[1]} arguments`));
  }
};

/**
 * Checking of the console arguments
 */
const validateArgs = () => {
  if (!getConfig()) {
    errorHandler(
      new Error("There is no the following required argument: --config")
    );
  }

  const arr = [CONFIG, OUTPUT_FILE, INPUT_FILE];

  arr.forEach((argNames) => {
    checkMultipleArgs(argNames);
  });

  const inputFile = getInputFile();

  if (inputFile) {
    fs.access(inputFile, fs.constants.R_OK, (err) => errorHandler(err));
  }

  const outputFile = getOutputFile();

  if (outputFile) {
    fs.access(outputFile, fs.constants.W_OK, (err) => errorHandler(err));
  }
};

module.exports = {
  validateArgs,
  getConfig,
  getInputFile,
  getOutputFile,
};
