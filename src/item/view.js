
const path = require('path');
const read = require('./view.core');
const { config } = require('../config/');

module.exports = async (type, filter = undefined) => {
  const typePath = path.join(config.data_dir, type);

  //? List type
  if (filter === undefined) {
    var res = await read.list(typePath);
    var res_list = [];
    res.forEach(item => {
      res_list.push(item.replace(".json", ""));
    });
    return res_list;
  }
  //!eof

  //? Find by id
  if (typeof filter === 'string') {
    return await read.byId(typePath, filter);
  }
  //!eof

  //? Filter by id
  if (filter.id !== undefined) {
    return await read.byId(typePath, filter.id);
  }
  //!eof
};
