const consoleOutput = true;
const runMode = require('./get__run-mode');

setConsoleOutput = () => {
  try {
    if (runMode === "node") {
      return ( process.consoleOutput = consoleOutput ) ? true : false;
    } else {
      return ( window.consoleOutput = consoleOutput ) ? true : false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = setConsoleOutput();
