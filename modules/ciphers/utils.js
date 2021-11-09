/**
 * Return object with encode and decode methods
 * @param encode
 * @param decode
 *
 * @returns {*} - Object with encode/decode
 */
const ciphers = (encode, decode) => ({ encode, decode });

/**
 * Return cipher period
 */
const getCipherPeriod = (z, n) => (z + (n % z)) % z;

/**
 * Filter symbols outside from latin alphabet
 */
const filterSymbols = (cipher) => (codeNum) => {
  if (codeNum > 96 && codeNum < 123) {
    return 97 + cipher(codeNum - 97);
  } else if (codeNum > 64 && codeNum < 91) {
    return 65 + cipher(codeNum - 65);
  } else {
    return codeNum;
  }
};

/**
 * Get symbols from ASCII code
 */
const convertFromCode = (codeNum) => String.fromCharCode(codeNum);

/**
 * Convert symbols to ASCII code
 */
const convertToCode = (str) => str.charCodeAt(0);

/**
 * Compose algorithms
 */
const compose =
  (...fs) =>
  (x) =>
    fs.reduce((r, f) => f(r), x);

/**
 * Transform string
 */
const transformData = (cipher, str) =>
  Array.from(
    str,
    compose(convertToCode, filterSymbols(cipher), convertFromCode)
  ).join("");

/**
 * Encode string with the help of provided algorithm
 */
const encode = (cipher, str) => transformData(cipher.encode, str);

/**
 * Decode string with the help of provided algorithm
 */
const decode = (cipher, str) => transformData(cipher.decode, str);

module.exports = {
  ciphers,
  getCipherPeriod,
  encode,
  decode,
};
