const v_fs = require('v_file_system');

module.exports = async () => {
    return await v_fs.removeDir(process.v.data_dir, { recursive: true });
};

