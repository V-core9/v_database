const v_fs = require('v_file_system');
const path = require('path');

const read = {
  list: async (typePath) => {
    return await v_fs.listDir(typePath);
  },
  byId: async (typePath, id) => {
    return await v_fs.read(typePath + '/' + id + ".json");
  }
};

module.exports = async (type, filter = undefined) => {
  const typePath = path.join(process.v.data_dir, type);

  if (filter === undefined) return await read.list(typePath);

  if (typeof filter === 'string') {
    return await read.byId(typePath, filter);
  }

  if (filter.id !== undefined) {
    return await read.byId(typePath, filter.id);
  }

  if (filter.username !== undefined) {
    const items = await read.list(typePath);
    var found = false;
    var i = 0;
    var count = items.length - 1;
    while (found === false && i < count) {
      i++;
      const itemId = items[i].split('.');
      const resp = JSON.parse(await read.byId(typePath, itemId[0]));
      if (resp.username === filter.username) found = resp;
    }

    return found;
  }
};
