const v_fs = require('v_file_system');
const path = require('path');
const { dataDir } = require('../v_config');
const { v4: uuidv4 } = require('uuid');


module.exports = async (type, content) => {
  if(typeof type === 'undefined') return false;
  const typePath = path.join(dataDir, type);
  return await v_fs.promise.write(path.join( typePath, uuidv4()+'.json' ), JSON.stringify(content));
};

