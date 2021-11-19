const v_fs = require('v_file_system');
const path = require('path');

module.exports = async (type, filter=undefined ) => {
  const typeDir = path.join(process.dataDir, type);

  if (filter === undefined) return await v_fs.promise.listDir(typeDir);

  if (typeof filter === 'string')  return await v_fs.promise.read(typeDir+'/'+filter+".json");

  if (filter.id !== undefined) {
    return await v_fs.promise.read(typeDir+'/'+filter.id+".json");
  }

  if (filter.username !== undefined) {
    const items  = await v_fs.promise.listDir(typeDir);

    var found = false;
    var  i  = 0;
    while (i < items.length) {
      i++;
      const resp = JSON.parse(await v_fs.promise.read(typeDir+'/'+items[i]));
      if (resp.username === filter.username) found = resp;
    }

    return found;
  }
};
