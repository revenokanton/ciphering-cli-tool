const fs = require("fs");
const {
  CONFIG,
  OUTPUT_FILE,
  INPUT_FILE,
  ARGS,
  PATTERNS,
} = require("../constants");
const { handleError } = require("./error_handler");
const {
  getConfigProps,
  getInputFilePath,
  getOutputFilePath,
} = require("./args");

/**
 * Checking if config pattern is valid
 */
const checkConfigPatter = (steps) => {
  steps.forEach((step) => {
    if (!PATTERNS.includes(step)) {
      handleError(new Error("There are invalid config properties"));
    }
  });
};

/**
 * Checking if there are any multiplied arguments
 */
const checkMultipleArgs = (argNames) => {
  if (ARGS.filter((item) => argNames.includes(item)).length > 1) {
    handleError(new Error(`Please remove multiple ${argNames[1]} arguments`));
  }
};

/**
 * Checking of the console arguments
 */
const validateAppArgs = () => {
  const configValue = getConfigProps();
  if (configValue) {
    checkConfigPatter(configValue);
  } else {
    handleError(
      new Error("Please add a required config argument: -c | --config")
    );
  }

  const inputFile = getInputFilePath();

  if (inputFile) {
    fs.access(inputFile, fs.constants.R_OK, (err) => handleError(err));
  }

  const outputFile = getOutputFilePath();

  if (outputFile) {
    fs.access(outputFile, fs.constants.W_OK, (err) => handleError(err));
  }

  const arr = [CONFIG, OUTPUT_FILE, INPUT_FILE];

  arr.forEach((argNames) => {
    checkMultipleArgs(argNames);
  });
};

module.exports = {
  validateAppArgs,
};
