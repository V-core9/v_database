const v_fs = require('v_file_system');
const { data_dir } = require('../config/');

module.exports = async (dataType) => {
  return (dataType === undefined) ? false : await v_fs.removeDir(data_dir + '/' + dataType);
};


