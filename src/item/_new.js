const v_fs = require('v_file_system');
const { v4: uuidv4 } = require('uuid');


module.exports = async (type, content) => {
  return (type !== undefined) ? await v_fs.write(`${process.v.data_dir}/${type}/${uuidv4()}.json`, JSON.stringify(content)) : false;
};

