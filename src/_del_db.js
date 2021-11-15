const v_fs = require('v_file_system');
const path = require('path');
const {dataDir} = require('../v_config');

const delDB = async (dbName, dbPass) => {
    if (typeof dbName === 'undefined' || typeof dbPass === 'undefined') return false;
    return await v_fs.promise.removeDir(path.join(path.join(__dirname, `../${dataDir}`), dbName));
};


module.exports = delDB;
