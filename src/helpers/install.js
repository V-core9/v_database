const os = require('os');
const {saveConfig} = require('../config'); 

module.exports = async () => {
  console.log(`V_Database: Generating init config.`);

    answers = {
      app_mode: 'LIVE',
      data_live: '$_DATA',
      data_dev: '$_DEV',
      data_test: '$_TEST',
      //? Installed System Information
      installed: {
        timestamp: Date.now(),
        os_arch: os.arch(),
        os_platform: os.platform(),
        os_version: os.version(),
        os_release: os.release(),
        os_type: os.type(),
      }
    };

    saveConfig(answers);
};
