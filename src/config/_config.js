const path = require('path');

const { cfg_fpath } = require('./_$');

try {
  const config = require(cfg_fpath);

  module.exports = {
    data_dir: path.join(__dirname, `../../${config.data_dir}`),
    db_mode: "perItem",
    config
  };


} catch (e) {
  console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
  //console.log(e);
  module.exports = {};
}
