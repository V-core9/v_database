const { cfg_dpath } = require('../config/base');
const v_fs = require('v_file_system');
module.exports = async () => {
  var dir_status = false;
  try {
    await v_fs.listDir(cfg_dpath);
    dir_status = true;
  } catch (e) {
    //console.log(e);
  }
  //console.log(dir_status === true ? '📂 Found Root Config Directory. ✅' : '📂 Missing Root Config Directory. 🔻');
  return dir_status;
};
