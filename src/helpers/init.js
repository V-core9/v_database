const os = require('os');
const v_fs = require("v_file_system");
const path = require("path");

const { cfg_dpath, cfg_fpath } = require(path.join(__dirname, '../../config/base'));


const init = async () => {
  const data = {
    app_mode: "LIVE",
    log_to_console: false,
    log_to_file: true,
    data_dir: "$_DATA"
  };

  //? Mark it
  data.installed_ts = Date.now();

  //? System Architecture data
  data.architecture = os.arch();
  data.installed_os_platform = os.platform();
  data.installed_os_version = os.version();
  data.installed_os_release = os.release();
  data.installed_os_type = os.type();

  //? Create the data folder
  v_fs.mkdirSy(cfg_dpath);

  //? Create the config file
  v_fs.writeSy(cfg_fpath + '.js', `module.exports = ${JSON.stringify(data, null, 2)};`);

  //? Create the data folder
  v_fs.mkdirSy(cfg_dpath + '/' + data.data_dir);
};

module.exports = init;
