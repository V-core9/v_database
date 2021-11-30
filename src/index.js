
const helpers = require('./helpers');
const config= require('./config');


const v_db = {
  info: config.info,
  config: config.config,
  data_size : helpers.data_size,
  install: helpers.install,
  type: require('./type'),
  item: require('./item')
};


module.exports = v_db;
