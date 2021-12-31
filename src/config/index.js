var root_dir = '.v_database';
var data_dir = root_dir+'/$_DATA';
var cfg_fpath = data_dir+'/cfg';
var app_mode = 'LIVE';

try {
  const resp = require(process.env.PWD+'/'+cfg_fpath);
  app_mode = resp.app_mode;

  if (app_mode === 'LIVE') data_dir =  resp.data_live;
  if (app_mode === 'DEV') data_dir =  resp.data_dev;
  if (app_mode === 'TEST') data_dir =  resp.data_test;

} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

module.exports = {
  app_mode,
  data_dir,
  cfg_fpath,
  root_dir
};
