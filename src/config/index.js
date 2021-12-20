
const os = require('os');

const cfg_d = '.v_database';
const cfg_f = 'config';
const cfg_dpath = os.homedir+'/'+cfg_d;
const cfg_fpath = cfg_dpath+'/'+cfg_f;

var data_dir = cfg_dpath;
var app_mode = 'LIVE';

try {
  const resp = require(cfg_fpath);
  app_mode = resp.app_mode;
  data_dir = cfg_dpath+'/'+resp.data_dir;
} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

const isDev = () => {
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
