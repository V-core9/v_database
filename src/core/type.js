const { listDir, mkdir, removeDir } = require("v_file_system");
const { data_dir } = require("../config");
const itemCore = require("./item");

const typeCore = {
  // List of types
  all: async () => {
    const items = await listDir(data_dir);
    return items;
  },
  // Get a type
  one: async (type) => {
    return await itemCore.all(type);
  },
  // Create a type
  mk: async (type) => {
    return (type !== undefined ) ? await mkdir(`${data_dir}/${type}`) : false;
  },
  // Delete a type
  rm: async (type) => {
    return (type !== undefined ) ? await removeDir(`${data_dir}/${type}`) : false;
  },

  get: async ( type = null) => {
    return (type === null) ? typeCore.all() : await typeCore.one(type);
  }
};

module.exports = typeCore;
