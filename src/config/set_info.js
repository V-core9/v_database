
const config = require('./_config');
const isNode = require('./is_node');

setEnvConfig = () => {
  return (isNode === "node") ? (process.v = config) : false;
};

module.exports = setEnvConfig();
