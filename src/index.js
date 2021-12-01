
const config= require('./config');

const helpers = require('./helpers');

const v_db = {
  info: config.info,
  config: config.config,
  data_size : helpers.data_size,
  install: helpers.install,
  logger: helpers.logger,
  type: require('./type'),
  item: require('./item')
};


module.exports = v_db;
