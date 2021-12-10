const v_fs = require('v_file_system');
module.exports = async (type, data) => {
  if (type === undefined || data === undefined) return false;

  if (typeof data === 'string') return await v_fs.removeDir(process.v.data_dir + '/' + type+'/' + data +'.json');

  if (typeof data === 'object') {
    if ( data.id !== undefined) return await v_fs.removeDir(process.v.data_dir + '/' + type+'/' + data.id +'.json');
  }
};

