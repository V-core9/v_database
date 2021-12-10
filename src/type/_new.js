const v_fs = require('v_file_system');

module.exports = async (type) => {
  return (type !== undefined && type) ? await v_fs.mkdir(`${process.v.data_dir}/${type}`) : false;
};
