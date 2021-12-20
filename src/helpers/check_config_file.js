const { cfg_fpath } = require('../config');
const v_fs = require('v_file_system');
module.exports = async () => {
  return (await v_fs.read(cfg_fpath+'.js') !== false) ? true : false;
};
