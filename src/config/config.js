const { cfg_dpath, cfg_fpath } = require('./base');

var module_config = {};
try {
  const config = require(cfg_fpath);
  module_config = {
    data_dir: cfg_dpath+'/'+config.data_dir,
    db_mode: "perItem",
    config : config
  };
} catch (e) {
  console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

module.exports = module_config;
