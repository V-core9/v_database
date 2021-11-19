const path = require('path');

const {dbName} = require('../v_config');


dataDir = path.join(__dirname, `../${dbName}`);
const runMode = require('./get__run-mode');

setDataDir = () => {
  try {
    if (runMode === 'node') {
      process.dataDir = dataDir;
    } else {
      window.dataDir = dataDir;
    }
    return dataDir;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setDataDir();
