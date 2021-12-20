const os = require('os');
const v_fs = require("v_file_system");
const { cfg_dpath, cfg_fpath } = require('../config');

saveConfig = async (data) => {

    //? Create the data folder
    v_fs.mkdirSy(cfg_dpath);
    //? Create the config file
    v_fs.writeSy(cfg_fpath + '.js', `module.exports = ${JSON.stringify(data, null, 2)};`);
    //? Create the data folder
    v_fs.mkdirSy(cfg_dpath + '/' + data.data_live);
    v_fs.mkdirSy(cfg_dpath + '/' + data.data_dev);
    v_fs.mkdirSy(cfg_dpath + '/' + data.data_test);

};

module.exports = async () => {
  console.log(`This will now generate configurations for the V_Database to work system-wide.`);

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

    save_config(answers)
};
