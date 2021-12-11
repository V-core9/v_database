const info = require('./info');
const { config } = require('./config');
const { data_size, purge_database , install } = require('./helpers');

const v_db = {
  info,
  config,
  data_size,
  install,
  purge_database,
  type: require('./type'),
  item: require('./item')
};

module.exports = v_db;

