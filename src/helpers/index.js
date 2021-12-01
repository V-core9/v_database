const path = require('path');

module.exports = {
  data_size: require(path.join(__dirname, './data_size')),
  install: require(path.join(__dirname, './install')),
  logger: require(path.join(__dirname, './logger')),
};
