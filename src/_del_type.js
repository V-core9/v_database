const v_fs = require('v_file_system');
const path = require('path');
const {dataDir} = require('../v_config');

const delType = async (dataType) => {
    return await v_fs.promise.removeDir(path.join(dataDir, dataType));
};


module.exports = delType;
