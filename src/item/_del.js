const v_fs = require('v_file_system');
const path = require('path');

module.exports = async (dataType) => {
  if (typeof dataType === 'undefined') return false;
  return await v_fs.promise.removeDir(path.join(process.v.data_dir, dataType));
};

