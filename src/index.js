const path = require('path');

const v_db = {
  config: require('../v_config'),
  type: {
    new: require(path.join(__dirname,'./_type_new')),
    del: require(path.join(__dirname,'./_type_del')),
    list: require(path.join(__dirname,'./_type_list')),
  },
  item : {
    new: require(path.join(__dirname,'./_item_new')),
    del: require(path.join(__dirname,'./_item_del')),
    list: require(path.join(__dirname,'./_item_list')),
  }
};



module.exports = v_db;
