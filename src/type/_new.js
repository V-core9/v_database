const v_fs = require('v_file_system');
const path = require('path');

const msgLog = (msg) => {
  if (process.consoleOutput === true) console.log(msg);
};

const save = {
  oneForAll: async (type) => {
    msgLog('[oneForAll] mode >> save to single JSON file.');
    return await v_fs.promise.write(path.join(process.dataDir, `${process.dataDir}.json`), JSON.stringify({ name: "yea", timestamp: Date.now() }));
  },

  perType: async (type) => {
    msgLog('[perType] mode >> JSON file per type.');
    return await v_fs.promise.write(path.join(process.dataDir, `${type}.json`), JSON.stringify({ name: "yea", timestamp: Date.now() }));
  },

  perPost: async (type) => {
    msgLog('[perPost] mode >> separate JSON files per entry.');
    return await v_fs.promise.mkdir(path.join(process.dataDir, type));
  },
};


module.exports = async (type) => {
  if (typeof type === 'undefined') return false;

  var resp = null;
  switch (process.dbMode) {
    case "perPost":
      resp = await save.perPost(type);
      return resp;

    case "perType":
      resp = await save.perType(type);
      return resp;

    case "oneForAll":
      resp = await save.oneForAll(type);
      return resp;

    default:
      msgLog('[default] mode >> oneForAll :: save to single JSON file.');
      resp = await save.oneForAll(type);
      return resp;
  }
};

