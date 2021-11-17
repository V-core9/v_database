const v_fs = require('v_file_system');
const path = require('path');
const v_config = require('../v_config');

module.exports = async (type) => {
  if(typeof type === 'undefined') return false;

  switch (v_config.typeMode) {
    case "perPost":
      console.log('[perPost] mode >> separate JSON files per entry.');
      return await v_fs.promise.mkdir(path.join(v_config.dataDir, type));

    case "perType":
      console.log('[perType] mode >> JSON file per type.');
      return await v_fs.promise.write(path.join(v_config.dataDir, type+'.json'), JSON.stringify({name: "yea", timestamp: Date.now()}));

    default:
      console.log('[uni] mode >> save to single JSON file.');
      return await v_fs.promise.mkdir(path.join(v_config.dataDir, type));
  }
};

