const os = require('os');

const d_dir = '.v_database';
const d_cfg = 'v_config';
const cfg_dpath = os.homedir+'/'+d_dir;
const cfg_fpath = os.homedir+'/'+d_dir+'/'+d_cfg;

module.exports = {
  d_dir,
  d_cfg,
  cfg_dpath,
  cfg_fpath
};
