
const helpers = require('./helpers');


const v_db = {
  data_size : helpers.data_size,
  install: helpers.install,
  config: require('./config'),
  type: require('./type'),
  item: require('./item')
};


module.exports = v_db;
