const { getConfig } = require("../helpers/args");
const { caesar, rot8, atbash } = require("./cipher");

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
    const shift = parseInt(step.charAt(1), 10);
    transformSteps.push({ algorithm, shift });
  });

  return transformSteps;
};

module.exports = {
  getTransformSteps,
};
