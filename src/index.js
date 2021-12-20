const helpers = require('./helpers');


const v_database = {
  config: require('./config'),
  install: helpers.install,
  data_size: require('./data_size'),
  install: require('./install'),
  purge: require('./purge_database'),
  helpers,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_database;

