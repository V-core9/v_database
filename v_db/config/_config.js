const path = require('path');

try {
  const config = require(path.join(__dirname,'../../v__config'));

  module.exports = {
    data_dir: path.join(__dirname,`../../${config.data_dir}`),
    db_mode : "perItem",
    config
  };


} catch (e) {

    //console.log(e);
    module.exports = {};
}
