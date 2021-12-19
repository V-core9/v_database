const { cfg_dpath } = require('../config/base');
const v_fs = require('v_file_system');
module.exports = async () => {
  return (await v_fs.listDir(cfg_dpath) !== false) ? true : false;
};
