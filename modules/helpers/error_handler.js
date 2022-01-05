/**
 * Common error handler
 *
 * @param err - Error object with the following message
 */
const handleError = (err) => {
  if (err) {
    process.stderr.write(`${err.message}`);
    process.exit(1);
  }
};

module.exports = {
  handleError,
};
