const vCore = require('./view_core');

module.exports = async (type, filter = undefined) => {

  if (filter === undefined) {
    return await vCore.list(type);
  }

  if (typeof filter === 'string') {
    return await vCore.byId(type, filter);
  }

  if (filter.id !== undefined) {
    return await vCore.byId(type, filter.id);
  }

};
