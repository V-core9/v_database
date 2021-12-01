const v_fs = require('v_file_system');
const path = require('path');

const msgLog = (msg) => {
  if (process.v.consoleOutput === true) console.log(msg);
};

const save = {
  oneForAll: async (type) => {
    msgLog('[oneForAll] mode >> save to single JSON file.');
    return await v_fs.write(`${process.v.data_dir}/${process.v.data_dir}.json`), JSON.stringify({ name: "yea", timestamp: Date.now() });
  },

  perType: async (type) => {
    msgLog('[perType] mode >> JSON file per type.');
    return await v_fs.write(`${process.v.data_dir}/${type}.json`, JSON.stringify({ name: "yea", timestamp: Date.now() }));
  },

  perPost: async (type) => {
    msgLog('[perPost] mode >> separate JSON files per entry.');
    return await v_fs.mkdir(`${process.v.data_dir}/${type}`);
  },
};


module.exports = async (type) => {
  if (save.indexOf(process.v.db_mode) > -1) {
    return save[process.v.db_mode](type);
  }
  return false;

};


  /*
module.exports = async (type) => {
  if (typeof type === 'undefined') return false;
  var resp = null;
  switch (process.v.db_mode) {
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
  */

