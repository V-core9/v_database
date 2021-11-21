
const config = require('./v_config');
const runMode = require('./_get__app-env');

console.log(config.npmInfo._v_.app_config[config.mode]);

module.exports = () => {
  try {
    if (runMode === "node") {
      process.v = config.npmInfo._v_.app_config[config.mode];
    } else {
      window.v = config.npmInfo._v_.app_config[config.mode];
    }
    return db_mode;
  } catch (error) {
    //console.error(error);
    return false;
  }
};
