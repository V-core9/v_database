
const config= require('./config');

const helpers = require('./helpers');

const modules = require('./modules');

const v_db = {
  info: config.info,
  config: config.config,
  data_size : helpers.data_size,
  install: helpers.install,
  logger: modules.logger,
  type: require('./type'),
  item: require('./item')
};


module.exports = v_db;
