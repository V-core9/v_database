
const config = require('./_config');

if ( config !== {} ) {
  setEnvConfig = () => {
    return (process.v = config);
  };
}

module.exports = setEnvConfig();
