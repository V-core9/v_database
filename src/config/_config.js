const path = require('path');
const info = require('./info');
const config = require('../../v__config');

console.log(config);

module.exports = {
  data_dir: path.join(__dirname,`../../${config.data_dir}`),
  db_mode : "perPost",
  info,
  config
};
