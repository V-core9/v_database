const path = require('path');
const config = require('../../v__config');

module.exports = {
  data_dir: path.join(__dirname,`../../${config.data_dir}`),
  db_mode : "perItem",
  config
};
