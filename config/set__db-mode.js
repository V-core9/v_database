const dbMode = "perPost";
const runMode = require('./get__run-mode');

setDbMode = () => {
  try {
    if (runMode === "node") {
      process.dbMode = dbMode;
    } else {
      window.dbMode = dbMode;
    }
    return dbMode;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setDbMode();
