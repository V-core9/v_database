const path = require('path');

const v_db = {
  config: require('../v_config'),
  newType: require(path.join(__dirname,'./_new_type')),
  delType: require(path.join(__dirname,'./_del_type')),
  listTypes: require(path.join(__dirname,'./_list_types')),
};



module.exports = v_db;
