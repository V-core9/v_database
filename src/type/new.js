const v_fs = require('v_file_system');
const { config } = require('../config/');

module.exports = async (type) => {
  return (type !== undefined ) ? await v_fs.mkdir(`${config.data_dir}/${type}`) : false;
};
