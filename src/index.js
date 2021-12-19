const info = require('./info');
const config  = require('./config');
const { data_size, purge_database , install, check_config_dir, check_config_file , init} = require('./helpers');

const v_database = {
  init,
  info,
  config,
  data_size,
  install,
  purge_database,
  check_config_dir,
  check_config_file,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

