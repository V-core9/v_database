const v_fs = require("v_file_system");
const { root_dir, cfg_fpath } = require('.');

module.exports = async (data) => {
  console.log('data.data_live DIR : '+ v_fs.mkdirSy(root_dir));
  console.log('cfg_fpath DIR : '+ v_fs.writeSy(cfg_fpath+'.js', `module.exports = ${JSON.stringify(data, null, 2)};`));
  console.log('data.data_live DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_live));
  console.log('data.data_dev DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_dev));
  console.log('data.data_test DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_test));
  console.log(`V_Database: Saved Config. Location: ${process.env.PWD+'/'+root_dir} `);
};
