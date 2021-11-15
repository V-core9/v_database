const v_fs = require('v_file_system');
const path = require('path');
const {dataDir} = require('../v_config');

const newDB = async (dbName, dbPass) => {
    if (typeof dbName === 'undefined' || typeof dbPass === 'undefined') return false;
    await v_fs.promise.mkdir(path.join(path.join(__dirname, `../${dataDir}`), dbName));
    return await v_fs.promise.write(path.join(path.join(__dirname, `../${dataDir}`), dbName, `[_db_]`), JSON.stringify({ password: dbPass }));
};

module.exports = newDB;
