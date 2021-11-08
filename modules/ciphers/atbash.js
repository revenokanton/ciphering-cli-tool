const { ALPHABET, REVERSE_ALPHABET } = require("../constants");

/**
 * Encrypt/decrypt a given piece of text by the Atbash cypher.
 *
 * @param {string} text - A piece of a text, which we would like to encrypt or to decrypt.
 */
const atbashCipher = (text) =>
  text
    .split("")
    .map(
      (char) =>
        REVERSE_ALPHABET[ALPHABET.findIndex((letter) => letter === char)]
    )
    .join("");

module.exports = atbashCipher;
