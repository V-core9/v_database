const { install, data_size, purge, check_config_file } = require('./helpers');
const vCore = require("./core");


const v_database = {
  config: require('./config'),
  install: install,
  data_size: data_size,
  check_config_file: check_config_file,
  purge: purge,
  type: {
    // New Item Create
    new: vCore.type.mk,
    create: vCore.type.mk,
    mk: vCore.type.mk,

    // Get item list/single
    get: vCore.type.get,
    one: vCore.type.get,
    view: vCore.type.get,

    // Delete/Remove Item
    delete: vCore.type.rm,
    del: vCore.type.rm,
    rm: vCore.type.rm,
  },
  item: {
    // New Item Create
    new: vCore.item.mk,
    create: vCore.item.mk,
    mk: vCore.item.mk,

    // Get item list/single
    get: vCore.item.get,
    one: vCore.item.get,
    view: vCore.item.get,

    // Save/Update existing item
    save: vCore.item.up,
    update: vCore.item.up,
    up: vCore.item.up,

    // Delete/Remove Item
    delete: vCore.item.rm,
    del: vCore.item.rm,
    rm: vCore.item.rm,
  }
};

module.exports = v_database;

