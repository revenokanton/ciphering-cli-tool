const { getInputFile, getOutputFile } = require("../helpers/args");
const fs = require("fs");
const path = require("path");

const getReadStream = () => {
  const input = getInputFile();
  return input
    ? fs.createReadStream(path.join(__dirname, input))
    : process.stdin;
};

const getWriteStream = () => {
  const output = getOutputFile();
  return output
    ? fs.createWriteStream(path.join(__dirname, output), { flags: "w+" })
    : process.stdout;
};

module.exports = {
  getReadStream,
  getWriteStream,
};
