const v_fs = require('v_file_system');
const { config } = require('../config/');

module.exports = async (typeName = null) => {
  return (typeName === null) ? await v_fs.listDir(config.data_dir) : await v_fs.listDir(config.data_dir + '/' + typeName);
};
