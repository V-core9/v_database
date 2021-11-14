const v_fs = require('v_file_system');
const path = require('path');
const {dataLocation} = require('./defaults.config');

console.log(dataLocation);

newDB = async (dbName) => {
  try {
    const newDBRes = await v_fs.promise.mkdir(path.join(__dirname, `../${dataLocation}/${dbName}`));
    return true;
  } catch (error) {
    return false;
  }
  console.log('Create a new database.');
};

module.exports = newDB;
