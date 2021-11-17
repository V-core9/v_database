const v_fs = require('v_file_system');
const path = require('path');
const { dataDir } = require('../v_config');

module.exports = async (dataType) => {
  return await v_fs.promise.listDir(path.join(dataDir, dataType));
};
