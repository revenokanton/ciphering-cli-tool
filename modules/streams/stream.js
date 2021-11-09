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
  return input ? fs.createReadStream(path.join(input)) : process.stdin;
};

/**
 * Return write stream
 *
 * @returns {*} - Write stream or stdout
 */
const getWriteStream = () => {
  const output = getOutputFilePath();
  return output
    ? fs.createWriteStream(path.join(output), { flags: "w+" })
    : process.stdout;
};

module.exports = {
  getReadStream,
  getWriteStream,
};
