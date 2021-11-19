const v_fs = require('v_file_system');
const path = require('path');

module.exports = async (type) => {
  return await v_fs.promise.listDir(path.join(process.dataDir, type));
};
