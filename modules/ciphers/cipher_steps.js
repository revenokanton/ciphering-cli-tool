const { getConfig } = require("../helpers/args");
const { caesar, rot8, atbash, encode, decode } = require("./cipher");

/**
 * Return parsed config args
 *
 * @returns {*} - Parsed config args
 */
const getTransformSteps = () => {
  const config = getConfig().split("-");
  const transformSteps = [];

  const CIPHERS = {
    C: caesar(1),
    R: rot8,
    A: atbash,
  };

  config.forEach((step) => {
    const algorithm = CIPHERS[step.charAt(0)];
    const transformFunc =
      parseInt(step.charAt(1), 10) === 1
        ? (data) => encode(algorithm, data)
        : (data) => decode(algorithm, data);

    transformSteps.push(transformFunc);
  });

  return transformSteps;
};

module.exports = {
  getTransformSteps,
};
