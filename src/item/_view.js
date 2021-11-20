const v_fs = require('v_file_system');
const path = require('path');

const read = {
  list: async (typePath) => {
    return await v_fs.promise.listDir(typePath);
  },
  byId: async (typePath, id) => {
    return await v_fs.promise.read(typePath + '/' + id + ".json");
  }
};

module.exports = async (type, filter = undefined) => {
  const typePath = path.join(process.v.data_dir, type);

  if (filter === undefined) return await read.list(typePath);

  if (typeof filter === 'string') {
    //console.log("Filtering by ID");
    return await read.byId(typePath, filter);
  }

  if (filter.id !== undefined) {
    //console.log("Filtering by ID");
    return await read.byId(typePath, filter.id);
  }

  if (filter.username !== undefined) {
    //console.log("Filtering by USERNAME");
    const items = await read.list(typePath);
    //console.log(items);
    var found = false;
    var i = 0;
    var count = items.length - 1;
    while (found === false && i < count) {
      i++;
      const itemId = items[i].split('.');
      const resp = JSON.parse(await read.byId(typePath, itemId[0]));
      //console.log(`RESP: ${resp}`);
      if (resp.username === filter.username) found = resp;
    }

    return found;
  }
};
