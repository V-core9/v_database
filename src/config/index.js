const v_fs = require('v_file_system');

var root_dir = '.v_database';
var data_dir = '$_DATA';
var cfg_fpath = 'cfg';
var app_mode = 'LIVE';

try {
  const resp = require(root_dir+'/'+cfg_fpath);
  app_mode = resp.app_mode;
  data_dir = resp.data_live;
} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

isDev = async () => {
  return app_mode === "DEV";
};

saveConfig = async (data) => {
  console.log('data.data_live DIR : '+ v_fs.mkdirSy(root_dir));
  console.log('cfg_fpath DIR : '+ v_fs.writeSy(root_dir+'/'+cfg_fpath+'.js', `module.exports = ${JSON.stringify(data, null, 2)};`));
  console.log('data.data_live DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_live));
  console.log('data.data_dev DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_dev));
  console.log('data.data_test DIR : '+ v_fs.mkdirSy(root_dir+'/'+data.data_test));
  console.log(`V_Database: Saved Config. Location: ${root_dir} `);
}

module.exports = {
  app_mode,
  data_dir,
  cfg_fpath,
  root_dir,
  saveConfig,
  isDev
};
