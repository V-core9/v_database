

const vCore = require("./vCore");

module.exports = {
  // New Item Create
  new: vCore.create,
  create: vCore.create,
  mk: vCore.create,

  // Get item list/single
  get: vCore.load,
  one: vCore.load,
  view: vCore.load,

  // Save/Update existing item
  save: vCore.update,
  update: vCore.update,
  up: vCore.update,

  // Delete/Remove Item
  delete: vCore.remove,
  del: vCore.remove,
  rm: vCore.remove,
};
