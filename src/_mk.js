const v_fs = require('v_file_system');
const path = require('path');
const config = require('../v_config');

mk = async (dbName, dbPass) => {
  try {
    const mkDbDirRes = await v_fs.promise.mkdir(path.join(__dirname, `../${config.dataLocation}/${dbName}`));
    const mkDbFileRes = await v_fs.promise.write(path.join(__dirname, `../${config.dataLocation}/${dbName}/[_db_]`), JSON.stringify({password: dbPass}));
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = mk;
