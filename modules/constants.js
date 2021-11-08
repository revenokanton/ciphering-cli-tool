// CLI args
const CONFIG = ["-c", "--config"];
const INPUT_FILE = ["-i", "--input"];
const OUTPUT_FILE = ["-o", "--output"];

// Alphabet symbols
const STRING_ALPHA = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET = STRING_ALPHA.split("");
const REVERSE_ALPHABET = ALPHABET.reverse();

// Parsed args
const ARGS = process.argv.slice(2);

// Patterns
const PATTERNS = ["C0", "C1", "R0", "R1", "A"];

module.exports = {
  ARGS,
  CONFIG,
  INPUT_FILE,
  OUTPUT_FILE,
  STRING_ALPHA,
  ALPHABET,
  REVERSE_ALPHABET,
  PATTERNS,
};
