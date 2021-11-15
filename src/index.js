const path = require('path');

const v_db = {
  config: require('../v_config'),
  options: null,
  newType: require(path.join(__dirname,'./_new_type')),
  delType: require(path.join(__dirname,'./_del_type')),
  listTypes: require(path.join(__dirname,'./_list_types')),
  init() {
    console.log("V_DB->INIT()");
  }
};

v_db.init();


module.exports = v_db;
