
const path = require('path');
const read = require('./view.core');

module.exports = async (type, filter = undefined) => {



  if (filter === undefined) {
    return await read.list(type);
  }

  if (typeof filter === 'string') {
    return await read.byId(type, filter);
  }

  if (filter.id !== undefined) {
    return await read.byId(type, filter.id);
  }

};
