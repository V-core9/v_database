const path = require('path');

module.exports = {
  new: require(path.join(__dirname, './new')),
  del: require(path.join(__dirname, './del')),
  view: require(path.join(__dirname, './view')),
};
