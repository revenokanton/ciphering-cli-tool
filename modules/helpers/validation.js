const fs = require("fs");
const {
  CONFIG,
  OUTPUT_FILE,
  INPUT_FILE,
  ARGS,
  PATTERNS,
} = require("../constants");
const { errorHandler } = require("./error_handler");
const { getConfig, getInputFile, getOutputFile } = require("./args");

/**
 * Checking if config pattern is valid
 */
const checkConfigPatter = (configValue) => {
  const steps = configValue.split("-");

  steps.forEach((step) => {
    if (!PATTERNS.includes(step)) {
      errorHandler(new Error("There are invalid config properties"));
    }
  });
};

/**
 * Checking if there are any multiplied arguments
 */
const checkMultipleArgs = (argNames) => {
  if (ARGS.filter((item) => argNames.includes(item)).length > 1) {
    errorHandler(new Error(`There are multiple ${argNames[1]} arguments`));
  }
};

/**
 * Checking of the console arguments
 */
const validateArgs = () => {
  const configValue = getConfig();
  if (configValue) {
    checkConfigPatter(configValue);
  } else {
    errorHandler(
      new Error("There is no the following required argument: --config")
    );
  }

  const inputFile = getInputFile();

  if (inputFile) {
    fs.access(inputFile, fs.constants.R_OK, (err) => errorHandler(err));
  }

  const outputFile = getOutputFile();

  if (outputFile) {
    fs.access(outputFile, fs.constants.W_OK, (err) => errorHandler(err));
  }

  const arr = [CONFIG, OUTPUT_FILE, INPUT_FILE];

  arr.forEach((argNames) => {
    checkMultipleArgs(argNames);
  });
};

module.exports = {
  validateArgs,
};
