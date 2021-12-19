const v_fs = require('v_file_system');
const { v4: uuidv4 } = require('uuid');
const {config} = require('../config/');

module.exports = async (type, content, id = null) => {
  return await v_fs.write(`${config.data_dir}/${type}/${(id === null) ? uuidv4() : id}.json`, JSON.stringify(content));
};
