const {install, data_size, purge} = require('./helpers');


const v_database = {
  config: require('./config'),
  install: install,
  data_size: data_size,
  purge: purge,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

