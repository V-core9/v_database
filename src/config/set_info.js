
const config = require('./_config');
const runMode = require('./get_env');

setEnvConfig = () => {
  try {
    if (runMode === "node") {
      process.v = config;
    } else {
      window.v = config;
    }
    return config;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setEnvConfig();
