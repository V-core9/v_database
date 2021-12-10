
const config = require('./_config');

setEnvConfig = () => {
  return (process.v = config);
};

module.exports = setEnvConfig();
