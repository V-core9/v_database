
const os = require('os');

const cfg_d = '.v_database';
const cfg_f = 'config';
const cfg_dpath = os.homedir+'/'+cfg_d;
const cfg_fpath = cfg_dpath+'/'+cfg_f;

var config = {};
var data_dir = cfg_dpath;
var app_mode = 'LIVE';
var log_to_console = false;
var log_to_file = false;

try {
  const resp = require(cfg_fpath);
  app_mode = cfg_dpath+'/'+resp.app_mode;
  data_dir = cfg_dpath+'/'+resp.data_dir;
  log_to_console = resp.log_to_console;
  log_to_file = resp.log_to_file;
} catch (e) {
  //console.log('ERROR: v_database is missing configuration. \nHINT : Use [ v_database.install() ] to start the configuration process.');
}

module.exports = {
  app_mode,
  data_dir,
  log_to_console,
  log_to_file,
  cfg_d,
  cfg_f,
  cfg_dpath,
  cfg_fpath
};
