// cipher.js
const fromCode = (n) => String.fromCharCode(n);
const toCode = (s) => s.charCodeAt(0);

const cipher = (encode, decode) => ({ encode, decode });

const atbash = cipher(
  (n) => 25 - n,
  (n) => 25 - n
);

const caesar = (shift) =>
  cipher(
    (n) => period(26, n + shift),
    (n) => period(26, n - shift)
  );

const rot8 = caesar(8);

const filter = (alg) => (n) => {
  if (n > 96 && n < 123) {
    return 97 + alg(n - 97);
  } else if (n > 64 && n < 91) {
    return 65 + alg(n - 65);
  } else {
    return n;
  }
};

const period = (z, n) => (z + (n % z)) % z;

const transform = (f, s) =>
  Array.from(s, composeL(toCode, filter(f), fromCode)).join("");

const encode = (alg, s) => transform(alg.encode, s);

const decode = (alg, s) => transform(alg.decode, s);

const composeL =
  (...fs) =>
  (x) =>
    fs.reduce((r, f) => f(r), x);

module.exports = {
  caesar,
  atbash,
  rot8,
  encode,
  decode,
};
