const startApp = require("./modules/index");
const { validateAppArgs } = require("./modules/helpers/validation");

validateAppArgs();

startApp();
