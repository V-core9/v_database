const { app_mode } = require(".");

isDev = async () => {
  return app_mode === "DEV";
};

module.exports = isDev;
