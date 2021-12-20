const v_fs = require('v_file_system');
const { data_dir } = require('../config/');

module.exports = {

  list: async (type) => {
    var res = await v_fs.listDir(data_dir + '/' + type);
    var res_list = [];
    res.forEach(item => {
      res_list.push(item.replace(".json", ""));
    });
    return res_list;
  },

  byId: async (type, id) => {
    return JSON.parse(await v_fs.read(data_dir + '/' + type + '/' + id + ".json"));
  }

};

