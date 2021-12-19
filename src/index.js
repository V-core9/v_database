const info = require('./info');
const config = require('./config');
const helpers = require('./helpers');

const v_database = {
  info,
  config,
  data_size: helpers.data_size,
  install: helpers.install,
  purge_database: helpers.purge_database,
  check_config_dir: helpers.check_config_dir,
  check_config_file: helpers.check_config_file,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

