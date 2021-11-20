const v_fs = require('v_file_system');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


module.exports = async (type, content) => {
  if (typeof type === 'undefined') return false;
  const typePath = path.join(process.v.data_dir, type);
  return await v_fs.promise.write(path.join(typePath, uuidv4() + '.json'), JSON.stringify(content));
};

