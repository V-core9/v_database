const v_fs = require('v_file_system');
const { config } = require('../config/');

module.exports = async (dataType) => {
  return (dataType === undefined) ? false : await v_fs.removeDir(config.data_dir + '/' + dataType);
};


