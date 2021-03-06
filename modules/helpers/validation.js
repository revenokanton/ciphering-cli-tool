const fs = require("fs");
const { CONFIG, OUTPUT_FILE, INPUT_FILE, PATTERNS } = require("../constants");
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
const checkMultipleArgs = (argNames, args) => {
  if (args.filter((item) => argNames.includes(item)).length > 1) {
    handleError(new Error(`Please remove multiple ${argNames[1]} arguments`));
  }
};

/**
 * Checking of the console arguments
 */
const validateAppArgs = (args) => {
  const configValue = getConfigProps(args);
  if (configValue) {
    checkConfigPatter(configValue);
  } else {
    handleError(
      new Error("Please add a required config argument: -c | --config")
    );
  }

  const inputFile = getInputFilePath(args);

  if (inputFile) {
    try {
      fs.accessSync(inputFile, fs.constants.R_OK);
    } catch (error) {
      handleError(error);
    }
  }

  const outputFile = getOutputFilePath(args);

  if (outputFile) {
    try {
      fs.accessSync(outputFile, fs.constants.W_OK);
    } catch (error) {
      handleError(error);
    }
  }

  const arr = [CONFIG, OUTPUT_FILE, INPUT_FILE];

  arr.forEach((argNames) => {
    checkMultipleArgs(argNames, args);
  });
};

module.exports = {
  validateAppArgs,
  checkConfigPatter,
  checkMultipleArgs,
};
