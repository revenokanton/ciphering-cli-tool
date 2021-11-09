// Parsed args
const ARGS = process.argv.slice(2);

// CLI args
const CONFIG = ["-c", "--config"];
const INPUT_FILE = ["-i", "--input"];
const OUTPUT_FILE = ["-o", "--output"];

// Ciphers
const CESAR = "C";
const ROT8 = "R";
const ATBASH = "A";

// Patterns
const PATTERNS = [
  `${CESAR}0`,
  `${CESAR}1`,
  `${ROT8}0`,
  `${ROT8}1`,
  `${ATBASH}`,
];

module.exports = {
  ARGS,
  CONFIG,
  INPUT_FILE,
  OUTPUT_FILE,
  PATTERNS,
  CESAR,
  ROT8,
  ATBASH,
};
