const { cfg_fpath } = require('../config/_$');
const v_fs = require('v_file_system');
module.exports = async () => {

  var file_status = false;
  try {
    await v_fs.read(cfg_fpath);
    file_status = true;
  } catch (e) {
    //console.log(e);
  }

  //console.log(file_status === true ? '📑 Found Root Config File. ✅' : '📑 Missing Root Config File. 🔻');

  return file_status;
};
