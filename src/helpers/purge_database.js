const v_fs = require('v_file_system');

module.exports = async () => {
    const purge_status = await v_fs.removeDir(process.v.data_dir, { recursive: true });
    if (purge_status === true) {
        await v_fs.mkdir(process.v.data_dir);
        return true;
    } else {
        return false;
    }
};

