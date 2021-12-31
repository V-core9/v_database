const os = require('os');
const {root_dir} = require('../config'); 

const saveConfig = require('../config/save');

module.exports = async () => {
  console.log(`V_Database: Generating init config.`);

    answers = {
      app_mode: 'LIVE',
      data_live: root_dir+'/$_DATA',
      data_dev: root_dir+'/$_DEV',
      data_test: root_dir+'/$_TEST',
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
