
const config = require('./v_config');
const runMode = require('./_get__app-env');

setEnvConfig = () => {
  try {
    if (runMode === "node") {
      process.v = config;
    } else {
      window.v = config;
    }
    return db_mode;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setEnvConfig();
