const v_fs = require('v_file_system');

module.exports = async (typeName = null) => {
  return (typeName === null) ? await v_fs.listDir(process.v.data_dir) : await v_fs.listDir(process.v.data_dir + '/' + typeName);
};
