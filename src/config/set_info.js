
const config = require('./config');

if ( config !== {} ) {
  setEnvConfig = () => {
    return (process.v = config);
  };
}

module.exports = setEnvConfig();
