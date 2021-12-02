
const config = require('./_config');
const isNodeOrWeb = require('./is_node_or_web');

setEnvConfig = () => {
  try {
    if (isNodeOrWeb === "node") {
      process.v = config;
    } else {
      window.v = config;
    }
    return config;
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = setEnvConfig();
