
const os = require('os');

const cfg_d = '.v_database';
const cfg_f = 'config';
const cfg_dpath = os.homedir+'/'+cfg_d;
const cfg_fpath = cfg_dpath+'/'+cfg_f;

module.exports = {
  cfg_d,
  cfg_f,
  cfg_dpath,
  cfg_fpath
};
