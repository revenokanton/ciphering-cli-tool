const { STRING_ALPHA } = require("../constants");

/**
 * Encrypt/decrypt a given piece of text by the ROT-8 cypher.
 *
 * @param {string} text - A piece of a text, which we would like to encrypt or to decrypt.
 */
const rot8Cipher = (text, mode) => {
  const alpha = STRING_ALPHA + STRING_ALPHA.toUpperCase();
  return text.replace(/[a-z]/gi, (letter) => alpha[alpha.indexOf(letter) + 8]);
};

module.exports = rot8Cipher;
