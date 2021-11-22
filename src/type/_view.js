const v_fs = require('v_file_system');

module.exports = async (typeName = null) => {
  if (typeName === null) return await v_fs.promise.listDir(process.v.data_dir);
  return await v_fs.promise.listDir(process.v.data_dir + '/' + typeName);
};
