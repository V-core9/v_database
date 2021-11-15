const path = require('path');

const v_db = {
  config: require('../v_config'),
  options: null,
  newDB: require(path.join(__dirname,'./_new_db')),
  delDB: require(path.join(__dirname,'./_del_db')),
  listDatabases() {
    console.log('List of all available databases.');
    return true;
  },
  init() {
    console.log("V_DB->INIT()");
  }
};

v_db.init();


module.exports = v_db;
