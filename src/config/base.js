const path = require('path');

const d_dir = '.v_database';
const d_cfg = 'config';
const cfg_dpath = d_dir;
const cfg_fpath = path.join(cfg_dpath,d_cfg);

module.exports = {
  d_dir,
  d_cfg,
  cfg_dpath,
  cfg_fpath
};
