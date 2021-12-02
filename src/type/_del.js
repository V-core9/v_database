const v_fs = require('v_file_system');

module.exports = async (dataType) => {
  if (dataType === undefined) return false;
  return await v_fs.removeDir(process.v.data_dir + '/' + dataType);
};


