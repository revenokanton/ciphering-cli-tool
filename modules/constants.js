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

// Modes
const ENCRYPT = "ENCRYPT";
const DECRYPT = "DECRYPT";

// Patterns
const PATTERNS = ["C0", "C1", "R0", "R1", "A"];

// Ciphers
const CESAR = "CESAR";
const ROT8 = "ROT8";
const ATBASH = "ATBASH";

module.exports = {
  ARGS,
  ENCRYPT,
  DECRYPT,
  CONFIG,
  INPUT_FILE,
  OUTPUT_FILE,
  STRING_ALPHA,
  ALPHABET,
  REVERSE_ALPHABET,
  PATTERNS,
  CESAR,
  ROT8,
  ATBASH,
};
