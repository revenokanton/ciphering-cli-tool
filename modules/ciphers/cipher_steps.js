const { getConfig } = require("../helpers/args");
const cesarCipher = require("./cesar");
const rot8Cipher = require("./rot");
const atbashCipher = require("./atbash");
const { ENCRYPT, DECRYPT } = require("../constants");

/**
 * Return parsed config args
 *
 * @returns {*} - Parsed config args
 */
const getTransformSteps = () => {
  const config = getConfig().split("-");
  const transformSteps = [];

  const CIPHERS = {
    C: cesarCipher,
    R: rot8Cipher,
    A: atbashCipher,
  };

  config.forEach((step) => {
    const transformStep = {
      cypherFunc: CIPHERS[step.charAt(0)],
    };

    if (step.length > 1) {
      transformStep.mode =
        parseInt(step.charAt(1), 10) === 1 ? ENCRYPT : DECRYPT;
    }
    transformSteps.push(transformStep);
  });

  return transformSteps;
};

module.exports = {
  getTransformSteps,
};
