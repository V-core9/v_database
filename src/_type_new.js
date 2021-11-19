const v_fs = require('v_file_system');
const path = require('path');

module.exports = async (type) => {
  if(typeof type === 'undefined') return false;

  switch (process.dbMode) {
    case "perPost":
      //console.log('[perPost] mode >> separate JSON files per entry.');
      return await v_fs.promise.mkdir(path.join(process.dataDir, type));

    case "perType":
      //console.log('[perType] mode >> JSON file per type.');
      return await v_fs.promise.write(path.join(process.dataDir, type+'.json'), JSON.stringify({name: "yea", timestamp: Date.now()}));

    default:
      //console.log('[uni] mode >> save to single JSON file.');
      return await v_fs.promise.mkdir(path.join(process.dataDir, type));
  }
};

