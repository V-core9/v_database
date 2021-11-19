const path = require('path');

const userChoiceDir = `$_data`;

dataDir = path.join(__dirname, userChoiceDir);
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

modulemodule.exports = setDataDir();
