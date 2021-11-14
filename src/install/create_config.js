const v_fs = require('v_file_system');
const path = require('path');
template_config = (data) => {
  var mode = 'live';
  var location = "$_data";
  if (typeof data !== 'undefined') {
    mode = (typeof data.mode !== 'undefined') ? (["dev", "live"].indexOf(data.mode) > -1) ? data.mode : mode : mode;
    location = (typeof data.location !== 'undefined') ? data.location : location;
  }
  return `
  module.exports = {
    mode: "${mode}",
    dataDir: "${location}",
    createTS: ${Date.now()},
    installedBy: "${process.env.USERNAME}",
    encrypt: false,
  };
  `;
};

createConfig = () => {
  v_fs.promise.write(path.join(__dirname, `../../v_config.js`), template_config());
};

createConfig();

module.exports = createConfig;
