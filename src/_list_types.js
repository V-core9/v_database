const v_fs = require('v_file_system');
const {dataDir} = require('../v_config');

const listTypes = async () => {
  return await v_fs.promise.listDir(dataDir);
};

module.exports = listTypes;
