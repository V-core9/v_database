const {title} = require('../v_config');
const runMode = require('./get__run-mode');

setTitle = () => {
  try {
    if (runMode === "node") {
      process.title = title;
    } else {
      window.title = title;
    }
    return title;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setTitle();
