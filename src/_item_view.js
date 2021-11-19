const v_fs = require('v_file_system');
const path = require('path');

const read = {
  list: async (type) => {
    return await v_fs.promise.listDir(type);
  },
  byId : async (type, id)=>{
    return await v_fs.promise.read(type+'/'+id+".json");
  }
};

module.exports = async (type, filter=undefined ) => {
  const typePath = path.join(process.dataDir, type);

  if (filter === undefined) return await read.list(typePath);

  if (typeof filter === 'string')  return await read.byId(typePath, filter);

  if (filter.id !== undefined) {
    return await read.byId(typePath, filter.id);
  }

  if (filter.username !== undefined) {
    const items  = await read.list(typePath);

    var found = false;
    var  i  = 0;
    while (i < items.length) {
      i++;
      const resp = JSON.parse(await read.byId(typeDir+'/'+items[i]));
      if (resp.username === filter.username) found = resp;
    }

    return found;
  }
};
