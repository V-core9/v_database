const v_fs = require('v_file_system');

module.exports = async () => {
  return await v_fs.listDir(process.v.data_dir);
};
