const v_fs = require('v_file_system');

const read = {

  list: async (typePath) => {
    return await v_fs.listDir(typePath);
  },

  byId: async (typePath, id) => {
    return JSON.parse(await v_fs.read(typePath + '/' + id + ".json"));
  }

};

module.exports = read;
