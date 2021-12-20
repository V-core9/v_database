
const os = require('os');

const cfg_d = '.v_database';
const cfg_f = 'config';
const cfg_dpath = os.homedir + '/' + cfg_d;
const cfg_fpath = cfg_dpath + '/' + cfg_f;

var data_dir = cfg_dpath;
var app_mode = 'LIVE';

try {
  const resp = require(cfg_fpath);
  app_mode = resp.app_mode;

  if (app_mode === 'LIVE') data_dir = cfg_dpath + '/' + resp.data_live;
  if (app_mode === 'DEV') data_dir = cfg_dpath + '/' + resp.data_dev;
  if (app_mode === 'TEST') data_dir = cfg_dpath + '/' + resp.data_test;

} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

isDev = async () => {
  return (app_mode === 'DEV');
};

module.exports = {
  app_mode,
  data_dir,
  cfg_d,
  cfg_f,
  cfg_dpath,
  cfg_fpath,
  isDev
};
