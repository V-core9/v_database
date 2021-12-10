const v_fs = require('v_file_system');
const { v4: uuidv4 } = require('uuid');

module.exports = async (type, content) => {
  const id = (content.id !== undefined) ? content.id : uuidv4();
  return await v_fs.write(`${process.v.data_dir}/${type}/${id}.json`, JSON.stringify(content));
};
