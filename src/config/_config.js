const path = require('path');
const appInfo = require('./info');
const appConfig = require('../../v__config');

module.exports = {
  title: appInfo.name,
  description: appInfo.description,
  mode: `dev`,
  consoleOutput: false,
  data_dir: path.join(__dirname, `../../$_data`),
  db_mode: `perPost`,
  info: appInfo,
  config: appConfig
};
