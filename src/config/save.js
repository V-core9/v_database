const v_fs = require("v_file_system");
const { cfg_dpath, cfg_fpath } = require('.');

module.exports = async (data) => {
  //? Create the data folder
  v_fs.mkdirSy(cfg_dpath);
  //? Create the config file
  v_fs.writeSy(cfg_fpath + '.js', `module.exports = ${JSON.stringify(data, null, 2)};`);
  //? Create the data folder
  v_fs.mkdirSy(cfg_dpath + '/' + data.data_live);
  v_fs.mkdirSy(cfg_dpath + '/' + data.data_dev);
  v_fs.mkdirSy(cfg_dpath + '/' + data.data_test);
  console.log(`V_Database: Saved Config. Location: ${cfg_dpath} `);
};
