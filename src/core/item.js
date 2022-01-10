const { listDir, read, write, deleteFile } = require("v_file_system");
const { v4: uuidv4 } = require("uuid");
const { data_dir } = require("../config");

const itemCore = {
  // List [ALL] from a type
  all: async (type) => {
    var res = await listDir(data_dir + "/" + type);
    for (var i = 0; i < res.length; i++) {
      res[i] = res[i].replace(".json", "");
    }
    return res;
  },

  // Get [ONE] entry from a type
  one: async (type, id) => {
    return JSON.parse(await read(data_dir + "/" + type + "/" + id + ".json"));
  },

  // [MK] Create a new entry
  mk: async (type, content, id = null) => {
    return await write(`${data_dir}/${type}/${id === null ? uuidv4() : id}.json`, JSON.stringify(content));
  },

  up: async (type, content, id) => {
    return ((await itemCore.one(type, id)) === false) ? false : await write(`${data_dir}/${type}/${id}.json`, JSON.stringify(content));
  },

  rm: async (type, id) => {
    return await deleteFile(data_dir + "/" + type + "/" + id + ".json");
  },

  get: async (type, id = null) => {
    return (id === null) ? itemCore.all(type) : await itemCore.one(type, id);
  }
};

module.exports = itemCore;
