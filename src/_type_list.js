const v_fs = require('v_file_system');
const { dataDir } = require('../v_config');

module.exports = async () => {
  return await v_fs.promise.listDir(dataDir);
};
