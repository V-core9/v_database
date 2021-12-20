const helpers = require('./helpers');


const v_database = {
  config: require('./config'),
  install: helpers.install,
  data_size: helpers.data_size,
  purge: helpers.purge,
  helpers,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

