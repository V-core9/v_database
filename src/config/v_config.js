const path = require('path');
const appInfo = require('./info/');

module.exports = {
  title: appInfo.name,
  description: appInfo.description,
  mode: `dev`,
  consoleOutput: false,
  data_dir: path.join(__dirname, `../../$_data`),
  db_mode: `perPost`,
  npmInfo: appInfo
};
