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
    let transformFunc;
    if (parseInt(step.charAt(1), 10) === 1) {
      transformFunc = (data) => {
        return encode(CIPHERS[step.charAt(0)], data);
      };
    } else {
      transformFunc = (data) => {
        return decode(CIPHERS[step.charAt(0)], data);
      };
    }
    transformSteps.push(transformFunc);
  });

  return transformSteps;
};

module.exports = {
  getTransformSteps,
};
