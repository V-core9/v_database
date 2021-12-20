const { removeDir, mkdir } = require('v_file_system');
const { data_dir } = require('../config');

module.exports = async () => {
  return (await removeDir(data_dir, { recursive: true }) && await mkdir(data_dir));
};

