// Parsed args
const ARGS = process.argv.slice(2);

// CLI args
const CONFIG = ["-c", "--config"];
const INPUT_FILE = ["-i", "--input"];
const OUTPUT_FILE = ["-o", "--output"];

// Patterns
const PATTERNS = ["C0", "C1", "R0", "R1", "A"];

module.exports = {
  ARGS,
  CONFIG,
  INPUT_FILE,
  OUTPUT_FILE,
  PATTERNS,
};
