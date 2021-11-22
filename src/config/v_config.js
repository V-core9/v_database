const v_fs = require('v_file_system');
const path = require('path');
const npmInfoPath = path.join(__dirname, '../../package.json');

const npmInfo = JSON.parse(v_fs.sync.read(npmInfoPath));

//console.log(npmInfo._v_);

module.exports = {
  title: npmInfo._v_.name,
  subtitle: npmInfo._v_.title,
  mode: `dev`,
  consoleOutput: false,
  data_dir: path.join(__dirname, `../../$_data`),
  db_mode: `perPost`,
  npmInfo: npmInfo
};
