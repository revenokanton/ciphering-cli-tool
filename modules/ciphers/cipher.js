/**
 * Return object with encode and decode methods
 * @param encode
 * @param decode
 *
 * @returns {*} - Object with encode/decode
 */
const cipher = (encode, decode) => ({ encode, decode });

/**
 * Return cipher period
 */
const period = (z, n) => (z + (n % z)) % z;

/**
 * Caesar cipher algorithm
 */
const caesar = (shift) =>
  cipher(
    (n) => period(26, n + shift),
    (n) => period(26, n - shift)
  );

/**
 * ROT-8 cipher algorithm
 */
const rot8 = caesar(8);

/**
 * Atbash cipher algorithm
 */
const atbash = cipher(
  (n) => 25 - n,
  (n) => 25 - n
);

/**
 * Filter symbols outside from latin alphabet
 */
const filter = (alg) => (n) => {
  if (n > 96 && n < 123) {
    return 97 + alg(n - 97);
  } else if (n > 64 && n < 91) {
    return 65 + alg(n - 65);
  } else {
    return n;
  }
};

/**
 * Get symbols from ASCII code
 */
const fromCode = (n) => String.fromCharCode(n);

/**
 * Convert symbols to ASCII code
 */
const toCode = (s) => s.charCodeAt(0);

/**
 * Compose algorithms
 */
const composeL =
  (...fs) =>
  (x) =>
    fs.reduce((r, f) => f(r), x);

/**
 * Transform string
 */
const transform = (f, s) =>
  Array.from(s, composeL(toCode, filter(f), fromCode)).join("");

/**
 * Encode string with the help of provided algorithm
 */
const encode = (alg, s) => transform(alg.encode, s);

/**
 * Decode string with the help of provided algorithm
 */
const decode = (alg, s) => transform(alg.decode, s);

module.exports = {
  caesar,
  atbash,
  rot8,
  encode,
  decode,
};
