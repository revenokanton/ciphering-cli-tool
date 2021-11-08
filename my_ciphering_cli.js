const startApp = require("./modules/index");
const { validateArgs } = require("./modules/helpers/validation");

validateArgs();

startApp();
