const {install, data_size, purge, check_config_file} = require('./helpers');


const v_database = {
  config: require('./config'),
  install: install,
  data_size: data_size,
  check_config_file: check_config_file,
  purge: purge,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

