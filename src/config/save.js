const v_fs = require("v_file_system");
const { cfg_fpath } = require('.');

module.exports = async (data) => {
  console.log('cfg_fpath DIR : '+ v_fs.writeSy('cfg.js', `module.exports = ${JSON.stringify(data, null, 2)};`));
  console.log('data.data_live DIR : '+ v_fs.mkdirSy(data.data_live));
  console.log('data.data_dev DIR : '+ v_fs.mkdirSy(data.data_dev));
  console.log('data.data_test DIR : '+ v_fs.mkdirSy(data.data_test));
  console.log(`V_Database: Saved Config. Location: ${process.env.PWD} `);
};
