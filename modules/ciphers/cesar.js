const { ALPHABET, ENCRYPT } = require("../constants");

/**
 * Encrypt/decrypt a given piece of text by the Caesar's cypher.
 *
 * @param {string} text - A piece of a text, which we would like to encrypt or to decrypt.
 * @param {string} mode - If mode = encryption, then we encrypt the text; otherwise we decrypt the text
 */
const cesarCipher = (text, mode) => {
  const shift = mode === ENCRYPT ? -1 : 1;

  return text
    .split("")
    .map((symbol) => {
      const lowerCaseOfSymbol = symbol.toLowerCase();

      // Try to find an index of the symbol in the array <alphabet>
      const index = ALPHABET.indexOf(lowerCaseOfSymbol);

      if (index >= 0) {
        const isLowerCase = symbol === lowerCaseOfSymbol;
        let shiftedIndex = (index + shift) % ALPHABET.length;
        if (shiftedIndex < 0) {
          shiftedIndex += ALPHABET.length;
        }
        let image = ALPHABET[shiftedIndex];
        if (!isLowerCase) {
          image = image.toUpperCase();
        }
        return image;
      } else {
        return symbol;
      }
    })
    .join("");
};

module.exports = cesarCipher;
