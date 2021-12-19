const { cfg_dpath, cfg_fpath } = require('./base');

var config = {};
try {
  const resp = require(cfg_fpath);
  config = {
    data_dir: cfg_dpath+'/'+resp.data_dir,
    config : resp
  };
} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

module.exports = config;
