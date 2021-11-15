const v_fs = require('v_file_system');
const path = require('path');
const { dataDir } = require('../v_config');

const newType = async (dataType) => {
  return await v_fs.promise.mkdir(path.join(dataDir, dataType));
};

module.exports = newType;
