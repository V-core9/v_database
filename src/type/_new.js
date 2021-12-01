const type_saver = require('./saver');

module.exports = async (type) => {
  return (Object.keys(type_saver).indexOf(process.v.db_mode) > -1 && type !== undefined) ? await type_saver[process.v.db_mode](type): false;
};
