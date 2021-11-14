const v_fs = require('v_file_system');
const path = require('path');
const config = require('../v_config');

const mk = async (dbName, dbPass) => {
  try {
    const wait1 = await v_fs.promise.mkdir(path.join(__dirname, `../${config.dataDir}/${dbName}`));
    const wait2 = await v_fs.promise.write(path.join(__dirname, `../${config.dataDir}/${dbName}/[_db_]`), JSON.stringify({password: dbPass}));
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = mk;
