/**
 * Handle error as follows: we write the error message in process.stderr and
 * stop the process with code 1.
 *
 * @param err - Error object, which describe occurred error.
 */
const errorHandler = (err) => {
  if (err) {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  }
};

module.exports = {
  errorHandler,
};
