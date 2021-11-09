const { getInputFilePath, getOutputFilePath } = require("../helpers/args");
const fs = require("fs");
const path = require("path");

/**
 * Return read stream
 *
 * @returns {*} - Read stream or stdin
 */
const getReadStream = () => {
  const input = getInputFilePath();
  if (input) {
    return fs.createReadStream(path.join(input));
  } else {
    console.log("Enter text:");
    return process.stdin;
  }
};

/**
 * Return write stream

 * @returns {*} - Write stream or stdout
 */
const getWriteStream = () => {
  const output = getOutputFilePath();
  if (output) {
    return fs.createWriteStream(path.join(output), { flags: "w+" });
  } else {
    return process.stdout;
  }
};

module.exports = {
  getReadStream,
  getWriteStream,
};
