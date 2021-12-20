const v_fs = require('v_file_system');
const { data_dir } = require('../config/');

module.exports = async (typeName = null) => {
  return (typeName === null) ? await v_fs.listDir(data_dir) : await v_fs.listDir(data_dir + '/' + typeName);
};
