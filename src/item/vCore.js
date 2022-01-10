const v_fs = require("v_file_system");
const { v4: uuidv4 } = require("uuid");
const { data_dir } = require("../config/");

const vCore = {
  list: async (type) => {
    var res = await v_fs.listDir(data_dir + "/" + type);
    var res_list = [];
    res.forEach((item) => {
      res_list.push(item.replace(".json", ""));
    });
    return res_list;
  },

  byId: async (type, id) => {
    return JSON.parse(
      await v_fs.read(data_dir + "/" + type + "/" + id + ".json")
    );
  },

  create: async (type, content, id = null) => {
    return await v_fs.write(
      `${data_dir}/${type}/${id === null ? uuidv4() : id}.json`,
      JSON.stringify(content)
    );
  },

  remove: async (type, data) => {
    if (type === undefined || data === undefined) return false;

    if (typeof data === "string")
      return await v_fs.removeDir(data_dir + "/" + type + "/" + data + ".json");

    if (typeof data === "object") {
      if (data.id !== undefined)
        return await v_fs.removeDir(
          data_dir + "/" + type + "/" + data.id + ".json"
        );
    }
  },

  load: async (type, id = undefined) => {
    return id === undefined ? await vCore.list(type): await vCore.byId(type, id);
  },

  update: async (type, content, id) => {
    if ((await viewItem(type, id)) === false) return false;

    return await v_fs.write(
      `${data_dir}/${type}/${id}.json`,
      JSON.stringify(content)
    );
  },
};

module.exports = vCore;
