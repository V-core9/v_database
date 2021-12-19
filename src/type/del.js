const v_fs = require('v_file_system');

module.exports = async (dataType) => {
  return (dataType === undefined) ? false : await v_fs.removeDir(process.v.data_dir + '/' + dataType);
};


