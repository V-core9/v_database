const item_saver = require('./saver');

module.exports = async (type, content) => {
  return (Object.keys(item_saver).indexOf(process.v.db_mode) > -1 && type !== undefined) ? await item_saver[process.v.db_mode](type, content): false;
};
