const v_fs = require('v_file_system');
const { data_dir } = require('../config/');

module.exports = async (type) => {
  return (type !== undefined ) ? await v_fs.mkdir(`${data_dir}/${type}`) : false;
};
