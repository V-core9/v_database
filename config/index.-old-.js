const path = require('path');

configLoad = () => {
  try {
    process.title = 'Tray Demo';
    process.mode = {
      mode: "live",
      typeMode: "perPost",
      dataDir: path.join(__dirname, `$_data`),
      createTS: 1636949575162,
      installedBy: "v__V_",
      encrypt: false,
    };
    return true;
  } catch (error) {
    return false;
  }
};

const configLoadStatus = configLoad();


module.exports = configLoadStatus;
