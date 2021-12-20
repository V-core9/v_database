const v_fs = require('v_file_system');
const { v4: uuidv4 } = require('uuid');
const { data_dir } = require('../config/');

module.exports = async (type, content, id = null) => {
  return await v_fs.write(`${data_dir}/${type}/${(id === null) ? uuidv4() : id}.json`, JSON.stringify(content));
};
